//O useState serve para armazenar estados nas variáveis
import React from 'react';
import './global.css'; 
import Routes from './routes';

function App() {
  //O useState retorna um array com suas posições, a primeira 
  //é o valor da variável e a segunda e uma função que 
  //consegue alterar o valor da variável. 
  //const [counter, setCounter ] = useState(0); 
  //A função setCounter altera o valor de counter

  //function increment(){
    //setCounter(counter + 1);

  return (
    <Routes />
  );
}

export default App;
