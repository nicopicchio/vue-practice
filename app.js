const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'The Silence Of The Lambs',
      author: 'Thomas Harris',
      releaseYear: 1991,
      rating: 5
    }
  },
  methods: {
    increaseRating() {
      if (this.rating === 10) return
      else this.rating++
    },
    decreaseRating() {
      if (this.rating === 1) return
      else this.rating--
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    }
  }
})

app.mount('#app')