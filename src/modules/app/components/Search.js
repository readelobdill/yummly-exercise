import $ from 'jquery';
import React from 'react';
import SearchResult from './SearchResult';

export default React.createClass({
    componentWillUnmount() {
       if(this.serverRequest) this.serverRequest.abort();
    },

    _onSearchSubmit(event){
        event.preventDefault();
        this.serverRequest = $.get('http://api.yummly.com/v1/api/recipes',
            {
                _app_id: "cdbd4c42",
                _app_key: "786fe91ea92653a0bd25b3dd9639a664",
                q: this.state.searchValue
            }).done(function (result) {
                console.log(result)
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
            searchValue: 'rice'
        };
    },

    render() {
        const searchResults = this.state.searchResults.map(function(result) {
            return (<SearchResult result={result} key={result.id}/>);
        });

        return (
            <div className="search-container">
                <form className="search-form" onSubmit={this._onSearchSubmit}>
                    <input type="text" value={this.state.searchValue} onChange={this._handleSearchChange}/>
                    <button></button>
                </form>
                <ul className="results-container">{searchResults}</ul>
            </div>
        );
    }
});