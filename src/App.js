import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "http://google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>likes { likes } times</p>
        <p> { 10 } </p>
        <p> { Math.random() * 10 } </p>
        <a href={link}>google site</a>

      </div>
    </div>
  );
}

export default App;
