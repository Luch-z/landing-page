import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Home from './components/Home'

function App() {

  return (
      <div className="w-screen h-screen justify-center">
        <Header/>
        <Home/>
        <Body/>
      </div>
  )
}

export default App
