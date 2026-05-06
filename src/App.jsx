import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Experience from "./component/Experience";
import Education from "./component/Education";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <Experience />
        <Education />
      </main>
    </div>
  );
};
export default App;
