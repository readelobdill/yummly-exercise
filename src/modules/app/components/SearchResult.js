import React from 'react';
import _ from 'lodash';

const SearchResult = React.createClass({
    propTypes: {
        result: React.PropTypes.object.isRequired
    },

    render() {
        return (
            <div className="search-result">
                <img src={_.get(this.props.result, "imageUrlsBySize.90")}/>
                <span>{this.props.result.recipeName}</span>
            </div>
        );
    }
});

export default SearchResult