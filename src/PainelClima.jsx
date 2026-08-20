import useFetch from './useFetch';

function PainelClima() {
  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=-22.97&longitude=-49.87&current=temperature_2m,relative_humidity_2m,wind_speed_10m';
  const { dados, carregando, erro } = useFetch(url, 30000);

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <div>
      <p>🌡️ {dados.current.temperature_2m} °C</p>
      <p>💧 {dados.current.relative_humidity_2m}%</p>
    </div>
  );
}
export default PainelClima;
