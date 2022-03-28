import Welcome from "./components/Welcome";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
