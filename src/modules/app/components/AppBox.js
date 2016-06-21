import $ from 'jquery';
import React from 'react';
import SearchResult from './SearchResult';

const AppBox = React.createClass({
    // componentDidMount() {
    // },

    componentWillUnmount() {
        this.serverRequest.abort();
    },

    _getQuery(){
        this.serverRequest = $.get('http://api.yummly.com/v1/api/recipes',
            {
                _app_id: "cdbd4c42",
                _app_key: "786fe91ea92653a0bd25b3dd9639a664",
                q: this.state.searchValue
            }).done(function (result) {
                console.log(result);
                this.setState({
                    searchResults: result.matches
                });
        }.bind(this));
    },

    _handleSearchChange(event) {
        this.setState({searchValue: event.target.value});
    },

    getInitialState(){
        return {
            searchResults: [],
            searchValue: ''
        };
    },

    render() {
        const searchResults = this.state.searchResults.map(function(result) {
            return (<SearchResult result={result} key={result.id}/>);
        });

        return (
            <div className="app-container">
                <div className="search-container">
                    <input type="text" value={this.state.searchValue} onChange={this._handleSearchChange}/>
                    <button onClick={this._getQuery}>Search</button>
                </div>
                <div className="results-container">{searchResults}</div>
            </div>
        );
    }
});

export default AppBox