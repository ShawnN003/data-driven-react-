import Header from "./components/header.jsx"
import Entry from "./components/entry.jsx"
import Joke from "./components/joke.jsx"
import data from "./data.js"
import './App.css'

const entryElements = data.map((entry) => {
  return (
      <Entry
          img={entry.image}
          title={entry.title}
          country={entry.name}
          dates={entry.dates}
          text={entry.text}
      />
  )
})

export default function App() {
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>        </>
    )
}
