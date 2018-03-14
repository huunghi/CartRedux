import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import * as Message from './../constaints/Message';
import CartResult from '../components/CartResult';
import * as actions from './../actions/index';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        )
    }

    showCartItem = (cart) => {
        var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        if (cart.length > 0) {
            result = cart.map((prod, index) => {
                return (
                    <CartItem 
                        key={index} 
                        cart={prod} 
                        index={index} 
                        onDeleteItem={this.props.onDeleteItem}
                        onChangeMessage={this.props.onChangeMessage}
                        onUpdateQuantityinCart={this.props.onUpdateQuantityinCart}
                    />
                )
            })
        }
        return result;
    }
    showTotalAmount = (cart) => {
        var result = null;
        result = <CartResult cart={cart} />
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
            }),
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}

var mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteItem : product => {
            dispatch(actions.deleteItem(product))
        },
        onChangeMessage: message => {
            dispatch(actions.changeMessage(message))
        },
        onUpdateQuantityinCart: (product, quantity) => {
            dispatch(actions.updateQuantityinCart(product, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
