import { useState } from 'react'
import Accordian from './components/Accordian/Accordian'
import { ACCORDIAN_DATA as accordianData} from '../src/utils/data'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Accordian 
     data = {accordianData}
     defaultOpen = {2}
     />
    </>
  )
}

export default App
