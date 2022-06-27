import axios from 'axios';


export const buscarPartidas = (usuario) => {
  const url = `${process.env.REACT_APP_BASE_URL}/partidas`;
  return axios.get(`${url}/${usuario}`)
    .then((value) => {
      console.log(value);
      return value.data;
    })
    .catch((err) => console.error(err));
}