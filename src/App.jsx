import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'

function App() {

  return (
      <div className="w-screen h-screen justify-center overflow-x-hidden">
        <Header/>
        <Home/>
        <Body/>
        <Footer/>
      </div>
  )
}

export default App
