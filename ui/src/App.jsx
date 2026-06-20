import Section1 from "./components/section1/Section1"
import Section2 from "./components/section2/Section2"


const App = () => {
  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro: '',
      tag:'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag:'Underserve'
    },
    {
      img: 'https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag:'Underbanked'
    }
  ]
  return (
      <div>
      <Section1 users={users } />
          <Section2/>
    </div>
  )
}

export default App