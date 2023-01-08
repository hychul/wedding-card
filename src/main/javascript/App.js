import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactPage from "main/javascript/page/ReactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wedding-invitation" element={<ReactPage />} />
        <Route path="/react" element={<ReactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
