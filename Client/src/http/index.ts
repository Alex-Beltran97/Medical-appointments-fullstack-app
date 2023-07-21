import axios from 'axios';

const instance = () => axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  headers: {
    'Content-Type': 'application/json',
  }
});

const http = {
  get: (path: string) => instance().get(path)  
};

export default http;