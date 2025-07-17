import logo from './logo.svg';
import './App.css';
import {TaggedSelector} from './components/tagged-selector.js'

function App() {
  return (
    <div className="App">
      {/* Top Bar ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="top">
        <h1>Kaylin's Knobs</h1>
      </div>
      {/* Top Bar ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

      <div className="content">
        <div className="card-array">




          <div className="card three-one">
            <h2>Tagged Selector</h2>
            <TaggedSelector/>
          </div>



        </div> {/* card-array */}
      </div> {/* content */}
    </div> // app
  );
}

export default App;
