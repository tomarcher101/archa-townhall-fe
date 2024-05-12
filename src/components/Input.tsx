import { useState } from 'react';
import { postPost } from '../api';

const Input = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('Tom');

  const sendMessage = () => {
    postPost(message, name).then((response) => {
      response.json().then((response) => {
        console.log(response);
      });
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Send a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Input;
