import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';


import api from './Services/api'
function App() {

  const [input, setInput] = useState ('')
  const [cep, setCep] = useState({});

  async function handleSearch(){
    //29927000/json/

    if(input === ''){
      alert("Preencha algum cep!")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");
    }catch{
      alert("ops, erro ao buscar aqui");
      setInput("")
    }
  }
  
  return (
    <div className="container">
     <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
            <input 
            type="texr" 
            placeholder="Digite seu cep..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />

            <button className="buttonSearch" onClick={handleSearch}>
              <FiSearch size={25} color='#fff' />
            </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className='main'>
            <h2>CEP: {cep.cep}</h2>

            <span>{cep.logradouro}</span>
            <span>{cep.complemento}</span>
            <span>{cep.bairro}</span>
            <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}
         
    </div>
  );
}

export default App;
