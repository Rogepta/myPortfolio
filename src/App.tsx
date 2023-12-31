import "./App.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Technologies } from "./layout/sections/technologies/Technologies";
import { About } from "./layout/sections/about/About";
import { Projects } from "./layout/sections/projects/Projects";
import { Footer } from "./layout/footer/Footer";
import { Slogan } from "./layout/sections/slogan/Slogan";
import { Particle } from "./components/particle/Particle";

function App() {
  return (
    <>
      <Particle />
      <Header />
      <main>
        <Main />
        <Technologies />
        <About />
        <Projects />
        <Slogan />
      </main>
      <Footer />
    </>
  );
}

export default App;
