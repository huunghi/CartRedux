import React, { Component } from 'react';
import * as Types from './../constaints/Message';
class CartItem extends Component {

    render() {
        var { cart } = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={cart.product.image} alt={cart.product.name} />
                </th>
                <td>
                    <h5>
                        <strong>{cart.product.name}</strong>
                    </h5>
                </td>
                <td>{cart.product.price} $</td>
                <td className="center-on-small-only">
                    <span className="qty">{cart.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            onClick={() => this.updateQuantity(cart.product, cart.quantity - 1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a>—</a>
                        </label>
                        <label
                            onClick={() => this.updateQuantity(cart.product, cart.quantity + 1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td> {cart.quantity * cart.product.price} $</td>
                <td>
                    <button type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top" title="Remove Item"
                        data-original-title="Remove item"
                        onClick={() => this.deleteItem(cart.product)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }

    deleteItem = cart => {
        this.props.onDeleteItem(cart);
        this.props.onChangeMessage(Types.MSG_DELETE_CART_SUCCESS);
    }
    updateQuantity = (product, quantity) => {
        if (quantity > 0) {
            this.props.onUpdateQuantityinCart(product, quantity);
            this.props.onChangeMessage(Types.MSG_UPDATE_CART_SUCCESS);
        }
    }
}

export default CartItem;
