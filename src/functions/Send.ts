import axios from 'axios';
import Credentials from '../types/credentials';

const Send =
  <T = any, R = any>(credentials: Credentials) =>
  (endpoint: string, method: 'POST' | 'GET' | 'PUT' | 'DELETE' = 'POST') =>
  (data: T): Promise<R> =>
    axios({
      method,
      url: `https://${credentials.domain}.api-us1.com/api/3/${endpoint}`,
      headers: {
        'Content-Type': 'application/json',
        'Api-Token': credentials.token,
      },
      data,
    }).then((res) => res.data as R);

export default Send;
