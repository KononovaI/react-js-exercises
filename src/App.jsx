import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Technologies />
    </>
  );
};

const Header = () => {
  return (
    <div>
      <a href="#">Home </a>
      <a href="#">News </a>
      <a href="#">Chat</a>
    </div>
  );
};

const Technologies = () => {
  return (
    <ul>
      <li>css</li>
      <li>html</li>
      <li>js</li>
      <li>React</li>
    </ul>
  );
};

export default App;
