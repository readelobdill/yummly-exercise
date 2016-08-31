import React from 'react';
import _ from 'lodash';

export default React.createClass({
    componentDidMount() {
        let url = `http://api.yummly.com/v1/api/recipe/${this.props.params.recipeId}?_app_id=cdbd4c42&_app_key=786fe91ea92653a0bd25b3dd9639a664`
        fetch(url).then((response) => response.json())
          .then(result => this.setState({recipe: result}));
    },

    getInitialState(){
        return {
            recipe: {
                ingredientLines: []
            }
        };
    },

    render() {

        const ingredientLines = this.state.recipe.ingredientLines.map(function(ingredientLine, i) {
            return (<li key={i}>
                        <span className="fa fa-spoon"></span>
                        {ingredientLine}
                    </li>);
        });

        return (
            <div className="recipe-container">
                <h2>{this.state.recipe.name}</h2>
                <img src={_.get(this.state, 'recipe.images[0].hostedLargeUrl')}/>
                <ul>
                    {ingredientLines}
                </ul>
            </div>
        );
    }
});