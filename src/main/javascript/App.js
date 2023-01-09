import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeddingCardPage from "main/javascript/page/WeddingCardPage";
import ReactPage from "main/javascript/page/ReactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wedding-card" element={<WeddingCardPage />} />
        <Route path="/react" element={<ReactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
