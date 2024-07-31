require('dotenv').config();
const express = require('express');
const Stripe = require('stripe');

const stripe =Stripe(process.env.STRIPE_KEY)

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
  console.log(req.body.ViewScript);
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: `Moviename:${req.body.ViewScript.Moviename}`,
            },
            unit_amount: 1000 * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url:  `${process.env.CLIENT_URL}//Director_Home`,
    });
  
    res.send({url:session.url});
  });
  

  module.exports = router