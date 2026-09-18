import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import HomeSampleCollection from './components/HomeSampleCollection/HomeSampleCollection'
import PackagesDeals from './components/PackagesDeals/PackagesDeals'
import TestsPackages from './components/TestsPackages/TestsPackages'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="min-h-svh bg-page">
      <Header />

      <main>
        <Hero />
        <TestsPackages />
        <HomeSampleCollection />
        <PackagesDeals />
      </main>

      <Footer />
    </div>
  )
}

export default App
