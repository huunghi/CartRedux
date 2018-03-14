import React, { Component } from 'react';
import Products from './../components/Products';
import ProductItem from './../components/ProductItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../actions/index';

class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        );
    }

    showProduct(products) {
        return products.map((prod, index) => {
            return <ProductItem 
                key={index} 
                product={prod} 
                onAddToCart={this.props.onAddToCart}
                onChangeMessage={this.props.onChangeMessage}    
            />
        })
    }
}

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ).isRequired
}

var mapStateToProps = state => {
    return {
        products: state.products
    }
}

var mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actions.addToCart(product, 1))
        },

        onChangeMessage: message => {
            dispatch(actions.changeMessage(message))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
