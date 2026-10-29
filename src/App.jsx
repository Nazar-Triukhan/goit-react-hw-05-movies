import { lazy, Suspense } from 'react'
import './App.css'

const Home = lazy(() => import ('./pages/Home/Home'))
const Movies = lazy(() => import ('./pages/Movies/Movies'))
const MoviesDetails= lazy(() => import ('./pages/MovieDetails/MovieDetails'))
const Layaut= lazy(() => import ('./components/Layaut/Layaut'))

import Cast from './pages/Cast/Cast'
import Revies from './pages/Revies/Revies'
import { Route, Routes, Navigate } from 'react-router-dom'

function App() {


  return (
    <>
    <Suspense fallback={<p>loading page</p>}>
      <Routes>
        <Route path='/' element={<Layaut />}>
          <Route index element={<Home />}/>
          <Route path='/movies' element={<Movies />}/>
          <Route path='/movies/:movieID' element={<MoviesDetails />}>
              <Route path='cast' element={<Cast />}/>
              <Route path='revies' element={<Revies />}/>
          </Route>
          <Route path='*' element={<Navigate to='/' replace/>}/>
        </Route>
      </Routes>
    </Suspense>
    
    </>
  )
}

export default App
