import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import StripeButton from '../../components/stripe-button/stripe-button.component'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selector'

import './checkout.styles.scss'

const CheckOutPage = ({cartItems,total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>( <CheckoutItem 
                cartItem={cartItem} key={cartItem.id}
            />))
        }
        <div className="total">TOTAL: ${total}</div>
        <StripeButton price={total}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total : selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage)