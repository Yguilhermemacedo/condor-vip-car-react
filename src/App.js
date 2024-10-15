import FormContato from './components/Contato';
import Frota from './components/Frota';
import Header from './components/Header';
import Banner from './components/Home/Banner';
import Servicos from './components/Servicos';
import Sobre from './components/Sobre';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Sobre/>
      <Servicos/>
      <Frota/>
      <FormContato/>
    </div>
  );
}

export default App;
