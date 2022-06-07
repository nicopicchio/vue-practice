const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'The Silence Of The Lambs',
      author: 'Thomas Harris',
      releaseYear: 1991,
      rating: 5,
      x: 0,
      y: 0
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
    },
    handleMouseOver(e) {
      console.log('Mouse Over: ', e, e.type)
    },
    handleMouseLeave(e) {
      console.log('Mouse Left: ', e, e.type)
    },
    handleDoubleClick(e) {
      console.log('Double click: ', e, e.type)
    },
    handleMouseMove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  }
})

app.mount('#app')