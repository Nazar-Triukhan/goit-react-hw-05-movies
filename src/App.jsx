
import './App.css'
import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
import MoviesDetails from './pages/MovieDetails/MovieDetails'
import Layaut from './components/Layaut/Layaut'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Layaut />}>
          <Route index element={<Home />}/>
          <Route path='/movies' element={<Movies />}/>
          <Route path='/movies/:movieID' element={<MoviesDetails />}/>
        </Route>
        
      </Routes>
    </>
  )
}

export default App
