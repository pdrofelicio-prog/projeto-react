import React, { useState } from 'react';

const IMCForm = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = parseFloat(altura) / 100;
    const resultadoIMC = parseFloat(peso) / (alturaMetros * alturaMetros);
    setImc(resultadoIMC.toFixed(2));

    let classificacaoIMC = '';
    if (resultadoIMC < 18.5) classificacaoIMC = 'Abaixo do peso';
    else if (resultadoIMC >= 18.5 && resultadoIMC < 24.9) classificacaoIMC = 'Peso normal';
    else if (resultadoIMC >= 25 && resultadoIMC < 29.9) classificacaoIMC = 'Sobrepeso';
    else classificacaoIMC = 'Obesidade';
    setClassificacao(classificacaoIMC);
  };

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calcularIMC();
        }}
      >
        <div>
          <label htmlFor="altura">Altura (cm):</label>
          <input
            type="number"
            id="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="peso">Peso (kg):</label>
          <input
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      {imc && (
        <div className="result">
          <h2>Resultado</h2>
          <p>IMC: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
};

export default IMCForm;
