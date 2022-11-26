import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/remindtest" element={<Home />} />
          <Route path="/edit/note/:idx" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
