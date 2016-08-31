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
        let url = `http://api.yummly.com/v1/api/recipes?_app_id=cdbd4c42&_app_key=786fe91ea92653a0bd25b3dd9639a664&q=${this.data.searchQuery}`
        fetch(url).then((response) => response.json()).then(result => {
           this.data.searchResults = result.matches;
           this.trigger(this.data);
        });
    }
});

export default SearchStore;