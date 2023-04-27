import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-bg-container">
    <Header />
    <div className="text-heading">
      <h1 className="home-heading">Find the Job That Fits Your Life</h1>
      <p className="home-description">
        Millions of people are searching for jobs, salary Information,company
        reviews, find the job that fits your abilities and potential
      </p>
      <button type="button" className="find-job-btn">
        Find Jobs
      </button>
    </div>
  </div>
)

export default Home
