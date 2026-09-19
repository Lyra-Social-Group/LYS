import Stripe from 'stripe'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  if (!config.stripeSecretKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Stripe is not configured.'
    })
  }

  const body = await readBody<{
    amount?: number
  }>(event)

  const amount = Number(body?.amount)

  // Stripe uses the smallest currency unit.
  // USD: $1.00 = 100 cents
  if (!Number.isFinite(amount)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid donation amount.'
    })
  }

  // Minimum $1, maximum $10,000.
  if (amount < 1 || amount > 10000) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Donation must be between $1 and $10,000.'
    })
  }

  const stripe = new Stripe(config.stripeSecretKey)

  const origin = getRequestURL(event).origin

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',

    line_items: [
      {
        price_data: {
          currency: config.stripeDonationCurrency || 'usd',

          product_data: {
            name: 'Donation to Lyra Social Group',
            description:
              'Support Lyra Social Group and its community projects.'
          },

          unit_amount: Math.round(amount * 100)
        },

        quantity: 1
      }
    ],

    success_url: `${origin}/donate/success?session_id={CHECKOUT_SESSION_ID}`,

    cancel_url: `${origin}/donate/cancel`,

    billing_address_collection: 'auto',

    metadata: {
      type: 'donation',
      organization: 'Lyra Social Group'
    }
  })

  if (!session.url) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Stripe did not return a checkout URL.'
    })
  }

  return {
    url: session.url
  }
})