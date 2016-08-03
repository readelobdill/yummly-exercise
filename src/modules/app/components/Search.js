import React from 'react';
import Reflux from 'reflux';
import SearchResult from './SearchResult';
import SearchStore from '../stores/search-store';
import SearchActions from '../actions/search-actions';

export default React.createClass({
    mixins: [ Reflux.connect(SearchStore, "search") ],
    componentWillMount(){
        SearchActions.getSearchResults();
    },
    _onSearchSubmit(event){
        event.preventDefault();
        SearchActions.getSearchResults();
    },

    _handleSearchChange(event) {
        SearchActions.updateSearchQuery(event.target.value);
    },

    render() {
        const searchResults = this.state.search.searchResults.map(function(result) {
            return (<SearchResult result={result} key={result.id}/>);
        });

        return (
            <div className="search-container">
                <form className="search-form" onSubmit={this._onSearchSubmit}>
                    <input type="text" value={this.state.search.searchQuery} onChange={this._handleSearchChange}/>
                    <button className="fa fa-search fa-lg"></button>
                </form>
                <ul className="results-container">{searchResults}</ul>
            </div>
        );
    }
});