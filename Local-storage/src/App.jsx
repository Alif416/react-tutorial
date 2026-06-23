

const App = () => {
  const user = {
    name: 'Alif',
    age: 24,
    profession: 'SWE'
  }
  
  localStorage.setItem('user', JSON.stringify(user))
  const usera = JSON.parse(localStorage.getItem('user'))
  console.log(usera);
  return (
    <div>App</div>
  )
}

export default App  