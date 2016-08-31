import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

export default React.createClass({
    propTypes: {
        result: React.PropTypes.object.isRequired
    },

    // HACK ALERT
    // Wanted bigger images, am hacking the url to grab bigger, more beautiful size
    _getImgSrc(){
        let url = _.get(this.props.result, "imageUrlsBySize.90");
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