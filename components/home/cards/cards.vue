<template lang="pug">
.cards
  .container
    .cards__wrapper
      .cards__item(v-for="(item, index) in cards" :key="index" :class="`cards__item--${item.color}`")
        .cards__item-label {{item.label}}
        img.cards__item-illustration--3(:alt="item.title" v-if="index === 0" src="images/illustrations/cards-3.png" srcset="images/illustrations/cards-3@2x.png 2x")
        img.cards__item-illustration--1(:alt="item.title" v-if="index === 1" src="images/illustrations/cards-1.png" srcset="images/illustrations/cards-1@2x.png 2x")
        img.cards__item-illustration--2(:alt="item.title" v-if="index === 2" src="images/illustrations/cards-2.png" srcset="images/illustrations/cards-2@2x.png 2x")
        //.cards__item-illustration
        .cards__item-text
          span {{item.title}}
          |  {{item.text}}
</template>

<script>
export default {
  data () {
    return {
      cards: [
        {
          color: 'pink',
          label: 'Creativity',
          title: 'Encourage creativity.',
          text: 'Spice up your team’s potential with best insights and ideas.'
        },
        {
          color: 'orange',
          label: 'Collaboration',
          title: 'Improve Collaboration.',
          text: 'Great ideas could come from anyone. Make sure  everyone is heard.'
        },
        {
          color: 'green',
          label: 'Brainstorms',
          title: 'Present better.',
          text: 'Turn your great ideas into clean and beautiful presentations.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "./_cards.scss";
</style>
