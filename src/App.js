import logo from './logo.svg';
import './App.css';
import Header from './page/Header';
import MenuKontak from './page/MenuKontak';
import MenuMakanan from './page/MenuMakanan';
import MenuTentangkami from './page/MenuTentangKami';
import Footer from './page/footer';


function App() {
  return (
    <div>
      <Header/>
      <MenuMakanan />
      <MenuTentangkami />
      <MenuKontak />
      <Footer/>
    </div>
  );
}

export default App;
