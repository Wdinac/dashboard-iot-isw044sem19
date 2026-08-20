function SensorCard({ nome, valor, unidade }) {
  return (
    <div
      style={{
        border: '1px solid #333',
        borderRadius: 10,
        padding: 16,
        minWidth: 160,
        background: '#181d2f',
        color: '#fff',
      }}
    >
      <h3>{nome}</h3>
      <p style={{ fontSize: 28 }}>
        {valor} {unidade}
      </p>
    </div>
  );
}

export default SensorCard;
