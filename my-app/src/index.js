import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

//setup vars

const books = [
  {
    id: 1,
    title: 'Believe IT: How to Go from Underestimated to Unstoppable',
    author: 'Jamie Kern Lima',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/41635oqEvvL._SX327_BO1,204,203,200_.jpg',
  },
  {
    id: 2,
    title: 'Life After Death',
    author: 'Sister Souljah ',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/41FYi16jzwL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
  {
    id: 3,
    title: 'Brown Bear, Brown Bear, What Do You See?',
    author: ' Bill Martin Jr. ',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._SY344_BO1,204,203,200_.jpg',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        // Book(book)
        // return <Book key={book.id} book={book} />
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}

// const Book = ({ img, title, author }) => {
//   // const { img, title, author } = props
//   return (
//     <article className='book'>
//       <img src={img} alt='' />
//       <h2>{title}</h2>
//       <h3>{author}</h3>
//     </article>
//   )
// }

const clickHandler = (e) => {
  console.log(e)
  console.log(e.target)
  return alert('hello World')
}

const moreComplex = (auth) => {
  console.log(auth)
}

const Book = (props) => {
  const { img, title, author } = props
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h3>{author}</h3>
      <button type='button' onClick={clickHandler}>
        alert
      </button>
      <button type='button' onClick={() => moreComplex(author)}>
        moreComplex
      </button>
    </article>
  )
}

// ########################################
// iterating over list of names

// const names = ['peter', 'susan', 'kika']
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>
// })

// #####################################
// access props over object
// access props over params
// access children
// const Book = ({ img, title, author, children }) => {
//   // const { img, title, author } = props
//   return (
//     <article className='book'>
//       <img src={img} alt='' />
//       <h2>{title}</h2>
//       <h3>{author}</h3>
//       {children}
//     </article>
//   )
// }

// ################################
// Accessing props directly

// const Book = (props) => {
//   console.log(props)
//   return (
//     <article className='book'>
//       <img src={props.img} alt='' />
//       <h2>{props.title}</h2>
//       <h3>{props.author}</h3>
//       <h4>{props.job}</h4>
//     </article>
//   )
// }

// ####################################
// const Book = (props) => {
//   console.log(props)
//   return (
//     <article className='book'>
//       <h1>this is book</h1>
//       <img src={img} alt='' />
//       <h2>{title.toUpperCase()}</h2>
//       <h3>{author}</h3>
//       {/* it cannot be statement inside js */}
//       {/* <p>{let x = 6}</p> */}

//       <p>{6 + 6}</p>
//     </article>
//   )
// }

// const Book = () => {
//   return (
//     <article className='book'>
//       <h1>this is book</h1>
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   )
// }

// const Image = () => {
//   return (
//     <article>
//       <img
//         src='https://images-na.ssl-images-amazon.com/images/I/41635oqEvvL._SX327_BO1,204,203,200_.jpg'
//         alt=''
//       />
//     </article>
//   )
// }
// const Author = () => {
//   return (
//     <h3 style={{ color: 'green', fontSize: '0.75rem', marginTop: '0.25rem' }}>
//       Jamie Kern Lima
//     </h3>
//   )
// }

// const Title = () => {
//   return <h2>Believe IT: How to Go from Underestimated to Unstoppable</h2>
// }

// const MyName = () => <h1>Laza Lazarevic</h1>
// const Message = () => {
//   return <h2>Uspeo sam u zivotu, zavide mi svi</h2>
// }

ReactDom.render(<BookList />, document.getElementById('root'))
