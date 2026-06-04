function List({ animals }) {
  return (
    <div>
      {animals.length > 0 ? (
        <ul>
          {animals.map((animal) => (
            <li key={animal}>{animal}</li>
          ))}
        </ul>
      ) : (
        <p>There is no animal exist</p>
      )}
    </div>
  );
}




function App() {
    const animals = ['Cow', 'Cat','Dog'];

    return (
        <div>
            <h1>Animals: </h1>
            <List animals={animals} />
        </div>
    );
}
export default App;