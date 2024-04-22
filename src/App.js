// import logo from './logo.svg';
import './App.css';
import Header1 from './components/Header1';
import Footer from './components/Footer';
import Tbl from './components/Tbl';
import Func from './components/Func';
import Doc1 from './components/Doc1'
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <div>
        <Header1 />
      </div>
      <div class='body'>
        <div class="table">
          <div>
            <Doc1 />
            <Tbl />
            <Func />
            <Events />
          </div>
        </div>

      </div>
      <Footer />


    </div>
  );
}

export default App;
