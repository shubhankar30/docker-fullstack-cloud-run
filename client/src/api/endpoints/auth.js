import axios from 'axios';
import config from '../../config';

const getAllValues = () => axios.get(
  `${config.API[config.STAGE]}/values/all`,
);
const getCurrentValues = () => axios.get(
  `${config.API[config.STAGE]}/values/current`,
);
// const login = (username, password) => axios.post(
//   `${config.API[config.STAGE]}/account/authenticate`,
//   {
//     username,
//     password,
//   },
//   {
//     withCredentials: true,
//   },
// );

export default {
  getAllValues,
  getCurrentValues,
};
