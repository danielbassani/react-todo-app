import './App.css';

import Tasks from './components/Tasks'
import Welcome from './components/Welcome'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Welcome title='Welcome!'/>
      <div className="d-flex">
        <Tasks/>
      </div>
    </div>
  );
}

export default App;
