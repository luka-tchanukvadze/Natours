/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: { email, password },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};
// export const login = async (email, password) => {
//   try {
//     const res = await fetch('http://127.0.0.1:3000/api/v1/users/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json(); // Convert response to JSON

//     if (!res.ok) {
//       throw new Error(data.message || 'Login failed');
//     }

//     if (data.status === 'success') {
//       alert('Logged in successfully!');
//       window.setTimeout(() => {
//         location.assign('/');
//       }, 1500);
//     }
//   } catch (error) {
//     alert(error.message || 'An error occurred');
//   }
// };
