import axios from 'axios';
import auth from './endpoints/auth';

// Set default headers for all API Requests(Set Headers as per back-end settings)
axios.defaults.headers['Content-Type'] = 'application/json';

export default {
  ...auth,
};
