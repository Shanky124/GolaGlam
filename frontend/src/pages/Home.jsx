import React from 'react'
import Hero from '../components/Hero'
import Latestcollection from '../components/Latestcollection'
import Bestseller from '../components/Bestseller'
import Ourpolicy from '../components/Ourpolicy'
import Nesletterbox from '../components/Nesletterbox'

const Home = () => {
  return (
    <div>
      <Hero />
      <Latestcollection/>
      <Bestseller/>
      <Ourpolicy/>
      <Nesletterbox/>
    </div>
  )
}

export default Home