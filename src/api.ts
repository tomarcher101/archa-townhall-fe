import axios from 'axios';

// Put localhost or exposed ngrok API URL here
const API_URL = 'http://localhost:8000';
// const API_URL =
//   'https://0bcc-2403-4800-3549-5f01-30a0-4b0c-fc3b-1d9c.ngrok-free.app';

const api = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'hi',
  },
});

export const getPosts = async () => {
  return api.get('/posts/');
};

export const postPost = async (content: string, name: string) => {
  return api.post('/posts/', {
    content,
    poster_name: name,
  });
};
