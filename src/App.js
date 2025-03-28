import './App.css';
import Logo from './componentes/Logo'
import OpcoesHeader from './componentes/OpcoesHeader'
import IconesHeader from './componentes/iconesHeader'

function App() {
  return (
    <div className ='App'>
      <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader> 
      </header>
    </div>
  );
}

export default App 
