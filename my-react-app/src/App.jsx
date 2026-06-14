import React from 'react'
import Card from './Card'
const App = () => {
  return (
    <div className='parent'>
      
      <Card user='Burger King' img='https://plus.unsplash.com/premium_photo-1683619761468-b06992704398?q=80&w=730&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='PizzaBurg'  img='https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
     </div>
    
  )
}

export default App

