import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router'

export default React.createClass({
    propTypes: {
        result: React.PropTypes.object.isRequired
    },

    render() {
        return (
            <Link to={`/recipe/${this.props.result.id}`}>
                <li className="search-result">
                    <img src={_.get(this.props.result, "imageUrlsBySize.90")}/>
                    <div>{this.props.result.recipeName}</div>
                </li>
            </Link>
        );
    }
});