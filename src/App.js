import React from 'react'
import "./App.css"
import Navbar from "./components/Navbar"
import Place from "./components/Place"
import data from "./data"

export default function App() {
    const places = data.map(item => {
      return (
          <Place
              key={item.id}
              {...item}/>
      )
  })        

  return (
      <div>
          <Navbar />
          <section className="places--list">
              {places}
          </section>
      </div>
  )
}
