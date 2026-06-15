import Card from './components/Card'

const App = () => {
  const jobs = [
  {
    companyName: "Google",
    daysAgo: 5,
    tags: ["Full-time", "Remote"],
    hourlyRate: 45
  },
  {
    companyName: "Microsoft",
    daysAgo: 2,
    tags: ["Full-time", "Hybrid"],
    hourlyRate: 40
  },
  {
    companyName: "Amazon",
    daysAgo: 1,
    tags: ["Contract", "Remote"],
    hourlyRate: 38
  },
  {
    companyName: "Meta",
    daysAgo: 7,
    tags: ["Full-time", "On-site"],
    hourlyRate: 50
  },
  {
    companyName: "Netflix",
    daysAgo: 3,
    tags: ["Part-time", "Remote"],
    hourlyRate: 55
  },
  {
    companyName: "Apple",
    daysAgo: 4,
    tags: ["Full-time", "Hybrid"],
    hourlyRate: 48
  },
  {
    companyName: "Spotify",
    daysAgo: 6,
    tags: ["Full-time", "Remote"],
    hourlyRate: 42
  },
  {
    companyName: "Airbnb",
    daysAgo: 8,
    tags: ["Contract", "Remote"],
    hourlyRate: 46
  },
  {
    companyName: "Uber",
    daysAgo: 2,
    tags: ["Full-time", "On-site"],
    hourlyRate: 37
  },
  {
    companyName: "Adobe",
    daysAgo: 10,
    tags: ["Part-time", "Hybrid"],
    hourlyRate: 44
  }
];
  return (
    <div className='parent'>
      {jobs.map(function (elem) {
        return <Card  company={elem.companyName} salary={elem.hourlyRate} days={elem.daysAgo} tags={elem.tags} />
      })}

   
    </div>
  )
}

export default App