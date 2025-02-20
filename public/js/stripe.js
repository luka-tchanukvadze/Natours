import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51QsgDdCcYMgBtrKi4q8SK2ljjJnwrINsWLmyDi1QCJAhx7GuJ5fMg1mnYOAUtyDFbKE9D8yk559bliGpaqMjDd3f00VD129JJf'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get chechout session from endpoint from API
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`,
      {}
    );
    // console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    console.log(error);
    showAlert('error', error);
  }
};
