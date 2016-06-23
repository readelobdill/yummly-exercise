import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router'

export default React.createClass({
    propTypes: {
        result: React.PropTypes.object.isRequired
    },

    _getImgSrc(){
        var url = _.get(this.props.result, "imageUrlsBySize.90");
        return _.replace(url, new RegExp("s90-c","g"), "s400-c");
    },

    render() {
        return (
            <Link to={`/recipe/${this.props.result.id}`}>
                <li className="search-result">
                    <img src={this._getImgSrc()}/>
                    <div>{this.props.result.recipeName}</div>
                </li>
            </Link>
        );
    }
});