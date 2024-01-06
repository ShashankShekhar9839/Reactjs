import './App.css'
import CheckBox from './components/Checkbox'

function App() {
   
 let handleChange = (newState) => {
    console.log('state of the checkbox is', newState)
  }

  return (
    <div className='wrapper'> 
    <h1>CheckBox Component Example</h1>
    <hr/> 
    <CheckBox 
    label = 'Mode' 
    checked = {true} 
    onChange = {handleChange}
    />
</div>
  )
}

export default App
