import "./App.css";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import TopHeader from "./Components/Topheader/TopHeader";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <Body />
    </div>
  );
}

export default App;
