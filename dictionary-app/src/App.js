import "./App.scss";
import Dictionary from "./components/Dictionary/Dictionary";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dictionary />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
