import LandingPage from './components/landingpage'
import App from './components/app'
import Footer from './components/footer'
import Phone from './components/phone'
import Berita from './components/berita'

export default function Home() {
  return (
    <main>
      <LandingPage />
      <App />
      <Berita />
      <Footer />
    </main>
  )
}
