import './css/bootstrap.min.css';
import './App.css';
import Nav from './Nav.jsx';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <div className="root">
      <Nav/>

      <Header/>

      <Main/>

      <Footer/>
    </div>
  );
}

export default App;
