import { useState } from 'react';
import { postPost } from '../api';

const Input = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('Anon');

  const sendMessage = () => {
    postPost(message, name).then((res) => {
      console.log(res.data);
      setMessage('');
    });
  };

  return (
    <div className="flex w-full gap-2">
      <input
        className="border-gray w-full rounded-md border px-2"
        type="text"
        placeholder="Send a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="rounded-md bg-blue-600 px-4 py-1 text-white"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default Input;
