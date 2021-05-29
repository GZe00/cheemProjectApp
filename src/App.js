import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';
import Footer from './components/Footer'
import Doge from './media/doge.png'

const App = () => {

  const [mem, setMem] = useState('');
  const [doge, setDoge] = useState('');
  const [cheem, setCheem] = useState('');


  const handleChange = ({ target }) => {
    setMem(target.value);
  }

  useEffect(() => {
    if (mem) {
      setDoge(mem);
    }
  }, [mem])



  const projectCheem = () => {

    let agresiv = 3;
    let powerCheem = "m";
    let countM = 0;
    let stmtrminmg = [];
    let string = doge.split("");
    for (let i = 0; i < string.length; i++) {
      countM++;
      if (countM === agresiv) {               //Que tan agresivo quieres tu cheems: 1 super agresivo, +5 tu cheems no tan agresivo
        countM = 0;
        stmtrminmg.push(powerCheem);
      }
      stmtrminmg.push(string[i]);
    }
    stmtrminmg = stmtrminmg.join('');
    setCheem(stmtrminmg);
  }

  const handleReset = () => {
    setMem('');
    setDoge('');
    setCheem('');
  }

  const handleCopy = () => {
    alert(`Tu CHEEM ha sido copiado`);
  }

  return (
    <div>
      <div className='bg'>
        <div className='header'>
          <div className='head-h1'>
            <h1>Cheem converText</h1>
          </div>
          <div className='head-h3'>
            <h3>Utiliza esta app con resonsabilidad</h3>
          </div>
        </div>
        <div className='app'>
          <input onChange={handleChange} input='text' value={mem} placeholder = 'Ingresa aquí el texto'/>
          <div className='buttons'>
            <button className='btn-cheem' onClick={projectCheem} >Cheems</button>
            <button className='btn-clean' onClick={handleReset} >Limpiar</button>
            <CopyToClipboard text={cheem} >
              <button className='btn-copy' onClick={handleCopy}>Copiar texto</button>
            </CopyToClipboard>
          </div>
          <div className='text-area'>
            {cheem}
          </div>
        </div>
        <img src={Doge} />
      </div>
      <footer>
        <Footer />
      </footer>

    </div>

  );
}

export default App;
