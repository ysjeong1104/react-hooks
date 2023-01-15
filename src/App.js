import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import ClickHook from "./routes/ClickHook";
import ConfirmHook from "./routes/ConfirmHook";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={ <h1>Helldo</h1> } />
        <Route path="/ClickHook" element={ <ClickHook /> } />
        <Route path="/ConfirmHook" element={ <ConfirmHook /> } />
        <Route path="/movie/:id" element={<Detail />} />

      </Routes>
    </Router>
  );
}

export default App;
