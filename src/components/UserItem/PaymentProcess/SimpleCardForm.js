import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { ContextUser } from '../../../App';



const SimpleCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError,setPaymentError] = useState(null)
  const {value3} = useContext(ContextUser)
  const [paymentSuccess,setPaymentSuccess] = value3

  const handleSubmit = async (event) => {
    
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
      setPaymentSuccess(null)
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null)
      console.log(paymentMethod)
    }
  };

  return (
    <div>
  
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
        {
          paymentError && <p style={{color:'red'}}>{paymentError}</p>
        }
        {
          paymentSuccess && <p style={{color:'green'}}>yor payment was Success</p>
        }
    </div>
  );
};
export default SimpleCardForm;