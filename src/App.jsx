import { useState } from 'react'

import Testimonial from './components/Testimonial.jsx'
import reviews from './components/data.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
  <div className='flex flex-col w-screen h-screen items-center justify-center bg-blue-200'>
    <div className='text-center'>
      <h1 className='text-4xl fon-bold'>Our Testimonials</h1>
      <div className='bg-violet-400 h-1 w-1/5 mt-1 mx-auto '> </div>

      <Testimonial reviews={reviews} />

    </div>
   
  </div>
    
  )
}

export default App
