import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import RecomendedJobs from "../components/Recomended_jobs"
import TopCompany from "../components/TopCompany"

function Home() {
  return (

    <div>
      <Navbar />
      <Hero />
      <RecomendedJobs />
      <TopCompany />
    </div>
  )
}

export default Home