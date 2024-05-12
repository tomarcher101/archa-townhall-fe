import axios from 'axios';

const API_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
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
