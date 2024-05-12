import { useState } from 'react';
import { postPost } from '../api';

const Input = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('Anon');

  const sendMessage = () => {
    postPost(message, name).then((res) => {
      console.log(res.data);
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
