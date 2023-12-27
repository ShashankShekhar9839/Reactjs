import { useState } from 'react'
import './App.css'
import ImageSliderOne from './components/ImageSliderOne'
import { IMAGE_URLS as imageUrls } from './utils/data'

function App() {

  return (
    <> 
    <h2>Type One of Image Slider Component</h2> 
    <ImageSliderOne 
    imageUrls = {imageUrls}
    />
    </>
  )
}

export default App
