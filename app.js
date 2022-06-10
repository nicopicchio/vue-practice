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
          rating: 5,
          amazonLink: 'https://www.amazon.co.uk/Silence-Lambs-Hannibal-Lecter-Paperback/dp/B0161TKTG8/ref=sr_1_4?crid=2MRUBTEP880GP&keywords=the+silence+of+the+lambs&qid=1654871743&sprefix=the+silence+%2Caps%2C94&sr=8-4'
        },
        {
          title: 'The Davinci Code',
          author: 'Dan Brown',
          releaseYear: 2003,
          rating: 5,
          amazonLink: 'https://www.amazon.co.uk/Vinci-Code-Exp-Dan-Brown/dp/052556585X/ref=sr_1_2?crid=19EOISKZPAIC3&keywords=the+davinci+code+book&qid=1654871825&sprefix=the+davin%2Caps%2C77&sr=8-2'
        },
        {
          title: 'Steve Jobs',
          author: 'Walter Isaacson',
          releaseYear: 2011,
          rating: 5,
          amazonLink: 'https://www.amazon.co.uk/Steve-Jobs-Exclusive-Walter-Isaacson-ebook/dp/B005J3IEZQ/ref=sr_1_4?crid=2ZCT7WU45AT4K&keywords=steve+jobs&qid=1654871864&sprefix=steve+jobs%2Caps%2C85&sr=8-4'
        },
        {
          title: 'Atomic Habits',
          author: 'James Clear',
          releaseYear: 2018,
          rating: 5,
          amazonLink: 'https://www.amazon.co.uk/Atomic-Habits-Proven-Build-Break/dp/1847941834/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1654871913&sr=8-1'
        },
        {
          title: 'The Hunt for Red October',
          author: 'Tom Clancy',
          releaseYear: 1984,
          rating: 5,
          amazonLink: 'https://www.amazon.co.uk/Hunt-Red-October-Tom-Clancy/dp/0870212850/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1654871940&sr=8-2'
        },
        {
          title: 'Mindset',
          author: 'Carol S. Dweck, Ph.D.',
          releaseYear: 2006,
          rating: 5,
          amazonLink: 'https://www.amazon.co.uk/Mindset-Updated-Changing-Fulfil-Potential/dp/147213995X/ref=sr_1_1?crid=2U7SNLFNGJ77B&keywords=mindset+carol+dweck&qid=1654871967&sprefix=mindse%2Caps%2C85&sr=8-1'
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
