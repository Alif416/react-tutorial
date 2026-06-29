

const App = () => {
  const sumbitHandler = (e) => {
    e.preventDefault()

    console.log('Form Submitted');

  }
  return (
    <div className="h-screen bg-black text-white">
      <form onSubmit={(e) => {
        sumbitHandler(e)
      }} className="flex gap-5 p-10 justify-between" >
        <div className="flex w-1/2 flex-col gap-5 p-10 justify-between"><input type="text" placeholder="Enter Notes Heading" className="px-5 py-2 border-2 rounded" />
        <input type="text" placeholder="Write Details" className="px-5 h-20 py-2 border-2 rounded " />
          <button className="bg-white text-black px-2 py-3 rounded ">Add Notes</button></div>
        <div>
          
        </div>

      </form>
    </div>
  )
}

export default App