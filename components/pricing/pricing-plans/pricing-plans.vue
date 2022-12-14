<template lang="pug">
.pricing-plans
  .pricing-plans__controls
    .pricing-plans__controls-title
      | monthly
    .pricing-plans__controls-switch(:class="{'pricing-plans__controls-switch--active': !priceType}" @click="changePriceType()")
      .pricing-plans__controls-switch-indicator
    .pricing-plans__controls-title
      | yearly
      span (25%&nbsp;off)
  .pricing-plans__items
    img.pricing-plans__illustration(src="images/illustrations/pricing-head.png" srcset="images/illustrations/pricing-head@2x.png 2x")
    .pricing-plans__item(v-for="(item, index) in plans" :key="index" :style="`color: ${item.color}`")
      .pricing-plans__item-title {{item.title}}
      .pricing-plans__item-content
        .pricing-plans__item-lead {{item.lead}}
        .pricing-plans__item-features
          .pricing-plans__item-feature(v-for="(item, index) in item.features" :key="index")
            span {{item.title}}
      .pricing-plans__item-meta
        .pricing-plans__item-price
          .pricing-plans__item-price-value(v-if="priceType && item.priceMouth !== 0") {{ formatPrice(item.priceMouth) }}
          .pricing-plans__item-price-value--contact(v-else) Contact sales for pricing
          .pricing-plans__item-price-period(v-if='item.priceMouth !== 0') per month, billed annually
        .pricing-plans__item-buttons
          nuxt-link.pricing-plans__item-button(:to="item.link")
            | See details
            svg(viewbox='0 0 38 21' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink')
              g#Page-1(stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round')
                g#Moderne-Pricing(transform='translate(-1132.000000, -769.000000)' stroke='currentColor' stroke-width='3')
                  g#plan(transform='translate(236.000000, 472.000000)')
                    g#pricing-arrow(transform='translate(897.500000, 299.000000)')
                      path(d='M0,9.5 L33.5,9 M25.5,0 L34,8.5 M34.5,9 L26,17.5')
  .pricing-plans__faq
    .pricing-plans__faq-items
      .pricing-plans__faq-item(v-for="(item, index) in faq" :key="index")
        .pricing-plans__faq-item-title {{item.title}}
        .pricing-plans__faq-item-text(v-html="item.text")
</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      priceType: true,
      plans: [
        {
          title: 'For Agencies',
          lead: 'Get the full power of our platform: unlimited access to our database and collaboration features for your creative team. Find, organize & share relevant best practices!',
          features: [
            {
              title: 'Access to thousands of creative market and consumer insights, ideas, trends, and innovations.'
            },
            {
              title: 'Unlimited industries, users and campaigns.'
            },
            {
              title: 'Additional support from our analysts.'
            }
          ],
          priceMouth: 0,
          priceYear: 966,
          color: '#FF9C5F',
          link: '/solutions/for-agencies'
        },
        {
          title: 'For Brands',
          lead: 'Use endless sources of inspiration and data from best practices and case studies on the most effective marketing, understand what\'s working in your category and build evidence for your ideas.',
          features: [
            {
              title: 'Access to thousands of creative market and consumer insights, ideas, trends and innovations.'
            },
            {
              title: 'Unlimited industries, 5 users and 5 campaigns.'
            },
            {
              title: 'Industry-specific trend reports.'
            }
          ],
          priceMouth: 689,
          priceYear: 590,
          color: '#6D63D4',
          link: '/solutions/for-brands'
        },
        {
          title: 'For Startups',
          lead: 'Stand out from your competitors with a creative approach in your next marketing campaign. Get the world???s top market and consumer insights, ideas and trends.',
          features: [
            {
              title: 'Access to the best creative market and consumer insights, ideas, trends and innovations from your industry.'
            },
            {
              title: '1 industry, 1 user and 1 campaign.'
            }
          ],
          priceMouth: 379,
          priceYear: 290,
          color: '#269D9B',
          link: '/solutions/for-startups'
        }
      ],
      faq: [
        {
          title: 'How can I pay?',
          text: 'You can set up regular credit card payments. <a href="mailto:mila@moderne.st">Get in touch</a> with our team if you???d prefer to be billed using a different payment method.'
        },
        {
          title: 'Can I subscribe to Moderne on monthly basis?',
          text: 'No, Moderne is available as an annual subscription only.'
        },
        {
          title: 'What is included in my annual subscription?',
          text: 'Your annual subscription gives you full online access to the  Moderne platform including 40,000+ market and consumer insights, case studies, trends and ideas. We also provide monthly reports on your primary industries'
        },
        {
          title: 'Can I share my login details with someone else?',
          text: 'Your personal profile details cannot be shared.'
        },
        {
          title: 'Have any other questions?',
          text: 'Contact us via <a href="mailto:support@moderne.st">support@moderne.st</a>'
        }
      ]
    }
  },
  methods: {
    formatPrice (value) {
      const val = (value / 1).toFixed(0).replace(',', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    changePriceType () {
      this.priceType = !this.priceType
    }
  }
}
</script>

<style lang="scss">
  @import './_pricing-plans.scss';
</style>
