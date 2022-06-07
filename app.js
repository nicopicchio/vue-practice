const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      x: 0,
      y: 0,
      books: [
        {
          title: 'The Silence Of The Lambs',
          author: 'Thomas Harris',
          releaseYear: 1991,
          rating: 5
        },
        {
          title: 'The Davinci Code',
          author: 'Dan Brown',
          releaseYear: 2003,
          rating: 5
        },
        {
          title: 'Steve Jobs',
          author: 'Walter Isaacson',
          releaseYear: 2011,
          rating: 5
        },
        {
          title: 'Atomic Habits',
          author: 'James Clear',
          releaseYear: 2018,
          rating: 5
        },
        {
          title: 'The Hunt for Red October',
          author: 'Tom Clancy',
          releaseYear: 1984,
          rating: 5
        },
        {
          title: 'Mindset',
          author: 'Carol S. Dweck, Ph.D.',
          releaseYear: 2006,
          rating: 5
        }
      ]
    }
  },
  methods: {
    increaseRating(book) {
      if (book.rating === 10) return
      else book.rating++
    },
    decreaseRating(book) {
      if (book.rating === 1) return
      else book.rating--
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
