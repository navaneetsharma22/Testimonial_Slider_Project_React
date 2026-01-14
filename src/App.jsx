import { useState } from 'react'

import Testimonial from './components/Testimonial.jsx'
import reviews from './components/data.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
  <div>
    <div>
      <h1>Our Testimonials</h1>
      <div> </div>

      <Testimonial reviews={reviews} />

    </div>
   
  </div>
    
  )
}

export default App
