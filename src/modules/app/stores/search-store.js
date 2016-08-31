import $ from 'jquery';
import Reflux from 'reflux';
import SearchActions from '../actions/search-actions';

const SearchStore = Reflux.createStore({

    listenables: SearchActions,

    data: {
        searchResults: [],
        searchQuery: 'guac'
    },

    getInitialState() {
      return this.data;
    },

    onGetSearchResults() {
        this._getSearchResults();
    },

    onUpdateSearchQuery(query){
        this.data.searchQuery = query;
        this.trigger(this.data);
    },

    _getSearchResults(){
        $.get('http://api.yummly.com/v1/api/recipes',
            {
                _app_id: "cdbd4c42",
                _app_key: "786fe91ea92653a0bd25b3dd9639a664",
                q: this.data.searchQuery
            }).done(function (result) {
                this.data.searchResults = result.matches;
                this.trigger(this.data);
        }.bind(this));
    }
});

export default SearchStore;