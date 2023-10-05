import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRETE_KEY ?? "", {
  apiVersion: "2023-08-16",
  appInfo: {
    name: "Sportify",
    version: "0.1.0",
  },
});
