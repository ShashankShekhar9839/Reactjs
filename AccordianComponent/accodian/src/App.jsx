import { useState } from 'react'
import Accordian from './components/Accordian/Accordian'
import { ACCORDIAN_DATA as accordianData} from '../src/utils/data'


function App() {

  return (
    <>
     <Accordian 
     data = {accordianData}
     defaultOpen = {4}
     /> 
    </>
  )
}

export default App
