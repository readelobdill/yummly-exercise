import React from 'react';

const SearchResult = React.createClass({
    propTypes: {
        result: React.PropTypes.object.isRequired
    },

    render() {
        console.log(this.props.result);
        return (
            <div className="search-result"></div>
        );
    }
});

export default SearchResult