import About from "./components/About";
import { BioProvider } from "./context";

const App = () => {
  return (
    <BioProvider>
      <About />
    </BioProvider>
  );
};

export default App;
