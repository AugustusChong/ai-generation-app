import { BrowserRouter } from "react-router-dom";
import { Navbar, MainContent } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MainContent />
    </BrowserRouter>
  );
};

export default App;
