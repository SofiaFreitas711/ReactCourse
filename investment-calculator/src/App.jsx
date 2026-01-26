import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"
import { useState } from "react"
function App() {
  const [initialInvestment, setInitialInvestment] = useState(10000)
  const [annualInvestment, setAnnualInvestment] = useState(1200)
  const [expectedReturn, setExpectedReturn] = useState(6)
  const [duration, setDuration] = useState(10)
  
  let inputIsValid = duration >= 1

  function handleChange(inputIdentifier, value){
    if(inputIdentifier==='initialInvestment'){
      setInitialInvestment(+value) 
    }
    if(inputIdentifier === 'annualInvestment'){
      setAnnualInvestment(+value)
    }
    if(inputIdentifier === 'expectedReturn'){
      setExpectedReturn(+value)
    }
    if(inputIdentifier=== "duration"){
      setDuration(+value)
    } 
  } 

  return (
    <>
      <Header />
      <UserInput initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} duration={duration} onChange={handleChange} />
      {inputIsValid && 
      <Results initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} duration={duration} />
      }
      {!inputIsValid && 
      <p className="center">Please enter a duration greater than zero.</p>
      }
    </>
  )
}

export default App
