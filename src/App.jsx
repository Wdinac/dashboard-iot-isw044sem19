import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import SensorCard from './SensorCard';
import PainelClima from './PainelClima';
import PainelVento from './PainelVento';

function App() {
  const [count, setCount] = useState(0);
  const [temperatura, setTemperatura] = useState(24.5);

  const [sensores, setSensores] = useState([
    { id: 1, nome: 'Temperatura', valor: 24.5, unidade: '°C' },
    { id: 2, nome: 'Umidade', valor: 60, unidade: '%' },
    { id: 3, nome: 'Luminosidade', valor: 300, unidade: 'lux' },
  ]);

  function atualizarTemperatura() {
    const novoValor = (20 + Math.random() * 10).toFixed(1);
    setTemperatura(novoValor);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      const novoValor = (20 + Math.random() * 10).toFixed(1);
      setTemperatura(novoValor);
    }, 2000);

    return () => clearInterval(intervalo); // limpeza ao desmontar o componente
  }, []); // [] = executa só uma vez, quando o componente monta

  return (
    <>
      <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
        <h1>Central de Sensores</h1>
        <p>Bem-vindo ao seu primeiro componente React!</p>
      </div>

      <div
        style={{
          fontFamily: 'sans-serif',
          padding: 24,
          display: 'flex',
          gap: 16,
        }}
      >
        <SensorCard nome="Temperatura" valor={24.5} unidade="°C" />
        <SensorCard nome="Umidade" valor={62} unidade="%" />
        <SensorCard nome="Luminosidade" valor={310} unidade="lux" />
      </div>

      <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
        <SensorCard nome="Temperatura" valor={temperatura} unidade="°C" />
        <button onClick={atualizarTemperatura}>Simular nova leitura</button>
      </div>

      <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
        <SensorCard nome="Temperatura" valor={temperatura} unidade="°C" />
      </div>

      <div style={{ display: 'flex', gap: 16 }}>
        {sensores.map((s) => (
          <SensorCard
            key={s.id}
            nome={s.nome}
            valor={s.valor}
            unidade={s.unidade}
          />
        ))}
      </div>
      <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
        <h1>🌤️ Painel de Dados Externos</h1>

        <PainelClima />
        <PainelVento />
      </div>
    </>
  );
}

export default App;
