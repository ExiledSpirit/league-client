import { useState } from 'react';
import { buscarPartidas } from '../../services/api-services';
import './search-partidas.scss';

function SearchPartidas() {
  const [nome, setNome] = useState('');
  const [partidas, setPartidas] = useState([]);

  async function fetchPartidas() {
    const partidasLista = await buscarPartidas(nome);
    setPartidas(partidasLista);
  }

  return (
    <div className='search-partidas'>
      <div className='buscas'>
        <input type={'text'} value={nome} onChange={(e) => setNome(e.target.value)}></input>
        <button onClick={fetchPartidas}>Clique</button>
      </div>
      <div className='partidas'>
        {partidas && partidas.length > 0 ?
          partidas.map((partida) => {
            return <p key={partida.info.gameId}>{`partida: ${partida.info.gameMode}`}</p>
          })
          :
          <p>Sem partidas encontradas</p>
        }
      </div>
    </div>
  );
}

export default SearchPartidas;
