import React, { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [categoria, setCategoria] = useState('');

  const calcularIMC = () => {
    if (!peso || !altura) return;

    const imcCalculado = (parseFloat(peso) / (parseFloat(altura) ** 2)).toFixed(2);
    setImc(imcCalculado);
    setCategoria(classificarIMC(imcCalculado));
  };

  const classificarIMC = (imc) => {
    imc = parseFloat(imc);
    if (imc < 18.5) return 'Baixo peso';
    else if (imc < 25) return 'Peso normal';
    else if (imc < 30) return 'Excesso de peso';
    else if (imc < 35) return 'Obesidade de classe 1';
    else if (imc < 40) return 'Obesidade de classe 2';
    else return 'Obesidade de classe 3';
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Calculadora de IMC</h1>
          <div className="input-group">
            <input
              type="number"
              placeholder="Peso (kg)"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
            <input
              type="number"
              placeholder="Altura (m)"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />
          </div>
          <button onClick={calcularIMC}>Calcular IMC</button>
          {imc && (
            <div className="resultado">
              <p>Seu IMC: <strong>{imc}</strong></p>
              <p>Categoria: <strong>{categoria}</strong></p>
            </div>
          )}
      </div>
      
    </div>
  );
}

export default App;

