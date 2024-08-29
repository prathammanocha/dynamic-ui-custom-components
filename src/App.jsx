import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CustomButton from './components/CustomButton'
import SampleMenuBar from './sampleWidgets/SampleMenuBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SampleMenuBar />
    </>
  )
}

export default App
