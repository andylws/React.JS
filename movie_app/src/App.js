function Player({name}) {
  return <h1>I like {name}</h1>;
}

function App() {
  return <div>
    <h1>Hello!</h1>
    <Player name="Muller" />
    <Player name="Neuer" />
    <Player name="Coman" />
    <Player name="Lewandowski" />
  </div>;
}

export default App;
