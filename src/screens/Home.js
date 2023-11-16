import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Caraousal from '../components/Caraousal'

export default function Home() {
  return (
    <div>
      <div><Navbar/></div>

      <div><Caraousal/></div>

      <div><Card/></div>
      
      <div><Footer/></div>
    </div>
  )
}
