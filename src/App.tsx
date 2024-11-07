import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Quiz } from "./pages/Quiz/Quiz";
import { Home } from "./pages/Home/Home";
import { Results } from "./pages/Results/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
