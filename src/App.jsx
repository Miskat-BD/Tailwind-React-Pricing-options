import { Suspense } from 'react'
import './App.css'
import DaisyNav from './assets/components/DaisyNav/DaisyNav'
import Navbar from './assets/components/Navbar/Navbar'
import PricingOptions from './assets/components/PricinigOptions/PricingOptions'
import ResultChart from './assets/components/ResultChart/ResultChart'

function App() {
const pricingOptionsPromise = fetch('pricingData.json').then(res => res.json())

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <PricingOptions pricingOptionsPromise = {pricingOptionsPromise}></PricingOptions>
        </Suspense>

        <ResultChart></ResultChart>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default App
