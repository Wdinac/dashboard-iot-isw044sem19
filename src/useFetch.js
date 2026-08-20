import { useState, useEffect } from 'react';

function useFetch(url, intervalo = null) {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let ativo = true;

    const buscarDados = () => {
      setCarregando(true);
      setErro(null);

      fetch(url)
        .then((r) => {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.json();
        })
        .then((json) => {
          if (ativo) {
            setDados(json);
            setCarregando(false);
          }
        })
        .catch((err) => {
          if (ativo) {
            setErro(err.message);
            setCarregando(false);
          }
        });
    };

    buscarDados();

    let timer;

    if (intervalo) {
      timer = setInterval(buscarDados, intervalo);
    }

    return () => {
      ativo = false;

      if (timer) {
        clearInterval(timer);
      }
    };
  }, [url, intervalo]);

  return { dados, carregando, erro };
}

export default useFetch;
