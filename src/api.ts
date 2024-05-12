const API_URL = 'http://localhost:8000';

export const getPosts = async () => {
  return fetch(`${API_URL}/posts/`);
};

export const postPost = async (content: string, name: string) => {
  return fetch(`${API_URL}/posts/`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content,
      poster_name: name,
    }),
  });
};
