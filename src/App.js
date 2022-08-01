import "./App.css";
import Head from "./Heading";

function App() {
  return (
    <div className="App">
      <Head
        title="this is my first post"
        content="this is some content for box"
        imgSrc="http://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png"
      />
      <Head
        title="title 2"
        content="content 2"
        imgSrc="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg"
      />
    </div>
  );
}

export default App;
