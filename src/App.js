
import './App.css';
import Navbar from './Navbar';
import Places from './Places';
import Data from './data';

function App() {
  const place = Data.map(item =>
    <Places key={item.id} item={item} />
  )
  return (
    <div className="App">
      <Navbar />
      {place}

    </div>
  );
}

export default App;
