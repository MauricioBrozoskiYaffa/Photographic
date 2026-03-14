import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Gallery from './components/Gallery/Gallery'
import Booking from './components/Booking/Booking'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
