
import './App.css'
import { sampleBooks } from './data'

function App() {

  return (
    <>
    <div>
      <header>ReadSphere Book Store</header>
        <main>
          {sampleBooks.map((book) => (
            <li key={book.slug}>
              <img src={book.image} alt={book.name} className='max-w-[400px] w-full'/>
              <h2>{book.name}</h2>
              <p>Rs.{book.price}</p>
            </li>
          ))}
        </main>
        <footer>All Right Reserved</footer>
    </div>
    </>
  )
}

export default App
