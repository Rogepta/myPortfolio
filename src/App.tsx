import "./App.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Technologies } from "./layout/sections/technologies/Technologies";
import { About } from "./layout/sections/about/About";
import { Projects } from "./layout/sections/projects/Projects";
import { Footer } from "./layout/footer/Footer";
import { Slogan } from "./layout/sections/slogan/Slogan";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Technologies />
      <About />
      <Projects />
      <Slogan />
      <Footer />
    </div>
  );
}

export default App;
