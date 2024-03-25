import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import RecomendedJobs from "../components/Recomended_jobs"

function Home() {
  return (

    <div>
      <Navbar />
      <Hero />
      <RecomendedJobs />
    </div>
  )
}

export default Home