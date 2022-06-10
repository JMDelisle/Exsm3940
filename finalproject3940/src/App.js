import './App.css';
import DataHome from './pages/DataHome';
import DataInput from './pages/DataInput';
import DataDisplay from './pages/DataDisplay';
import { Routes, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Router Demo</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/datainput">DataInput</Link></li>
            <li><Link to="/datadisplay">DataDisplay</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<DataHome />} />
          <Route path="/info" element={<DataInput />} />
          <Route path="/info" element={<DataDisplay />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;