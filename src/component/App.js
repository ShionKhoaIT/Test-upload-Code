import Directional from "../dieuhuong/Directional";
import './../css/App.css';
import Footer from './Footer';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      {/* <Home></Home> */}
      {/* <Gioithieu></Gioithieu> */}
      {/* <Duan></Duan> */}
      {/* <Contact></Contact> */}
      <Directional></Directional>
      <Footer></Footer>

    </div>
  );
}

export default App;
