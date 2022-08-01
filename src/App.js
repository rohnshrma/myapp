import "./App.css";
import Head from "./Heading";
import data from "./data.js";

function App() {
  return (
    <div className="App">
      <Head title={data[0].title} content={data[0].content} imgSrc ={data[0].imgSrc} />
      <Head title={data[1].title} content={data[1].content} imgSrc ={data[1].imgSrc} />
    </div>
  );
}

export default App;
