import useFetch from './useFetch';

function PainelVento() {
  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=-22.97&longitude=-49.87&current=wind_speed_10m';

  const { dados, carregando, erro } = useFetch(url);

  if (carregando) return <p>Carregando vento...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <div>
      <h2>Vento</h2>
      <p>💨 {dados.current.wind_speed_10m} km/h</p>
    </div>
  );
}

export default PainelVento;
