import { Route, Routes } from "react-router-dom"
import "./App.css"
import Navbar from "./components/navbar"
// import appstyle from "./styles/example.module.css"
// import nau from "./assets/nature.jpg"


// import Home from "./pages/home/home"
// import About from "./pages/about/about"
// import Service from "./pages/service/service"
// import Contact from "./pages/contact/contact"
// import Lessons from "./pages/lesson/lesson"
// import Timer from "./pages/timer/timer"
// import Games from "./pages/games/games"
import { Suspense, lazy } from "react"


const Home = lazy(()=>import('./pages/home/home'))
const About = lazy(()=>import('./pages/about/about'))
const Service = lazy(()=>import('./pages/service/service'))
const Contact = lazy(()=>import('./pages/contact/contact'))
const Lessons = lazy(()=>import('./pages/lesson/lesson'))
const Timer = lazy(()=>import('./pages/timer/timer'))
const Numbers = lazy(()=>import('./pages/numbers/numbers'))
const Games = lazy(()=>import('./pages/games/games'))
const SwiperCarousel = lazy(()=>import('./pages/swiper/swiperCarousel'))

function App(){
  return(
    <div className='shadow-lg w-75 p-4 rounded mx-auto my-3'>
      <Suspense fallback={<h1>...loading</h1>}>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/timer" element={<Timer/>}/>
          <Route path="/numbers" element={<Numbers/>}/>
          <Route path="/lessons" element={<Lessons/>}/>
          <Route path="/games" element={<Games/>}/>
          <Route path="/swiper" element={<SwiperCarousel/>}/>
          <Route path="*" element={<h1>404 - Page not Found</h1>}/>
        </Routes>

       
      </Suspense>
    </div>
  )
}



export default App


