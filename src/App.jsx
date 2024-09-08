import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./components/Home"
import VideoPage from './components/VideoPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room/:id' element={<VideoPage />} />
      </Routes>
    </>
  )
}

export default App
