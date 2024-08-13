import axios from "axios";

export const makePaymentRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    Authorization: "portador" + process.env.NEXT_PUBLIC_MERCADO_PAGO,
  },
});
