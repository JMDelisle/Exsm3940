import UserForm from './component/UserForm';
import UserList from './component/UserList';
import { Routes, Link, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>EXSM 3940 Final Project</h1>
        <nav className='Nav'>
          <ul>
            <li><Link to="/datainput">UserInput</Link></li>
            <li><Link to="/datadisplay">StoredDisplay</Link> {''}</li>
          </ul>
        </nav>
      </header>
      <main className='Main'>
        <div>
        <Routes>
          <Route index element={<div></div>} />
          <Route path="/datainput" element={<UserForm />} />
          <Route path="/datadisplay" element={<UserList />} exact={true}/>
        </Routes>        </div>
       </main>
      <footer className='Footer'>© Jean-Marc Delisle</footer>
    </div>
  );
}

export default App;