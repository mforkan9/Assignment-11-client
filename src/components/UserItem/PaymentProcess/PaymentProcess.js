import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51J48PcI49BSRorNvAiYFzddt5zOk2P5C5BbWLDiaPJrLMyaD1vDqcsX3BFWmHAvn7sm1nXCyCSvlJEQlgpFdeikS00EC4sMswv');

const PaymentProcess = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SimpleCardForm></SimpleCardForm>
            </Elements>
        </div>
    );
};

export default PaymentProcess;