import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_AiXePlSHS3vk2pEhQGpj99DO00z2vyJ0iO";

    const onToken = token => {
        alert('Payment Successful')
    }
    return (
        <StripeCheckout 
         label="Pay now"
        
         name="Clothing Commerce"
         billingAddress
         shippingAddress
         image="https://svgshare.com/i/CUz.svg"
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay now'
         token ={onToken}
         stripeKey={publishableKey}
        />
    )
}
export default StripeButton