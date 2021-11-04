// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.emailjs.com/api/v1.0/email/send',
});
