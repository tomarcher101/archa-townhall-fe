import { useState } from 'react';
import { postPost } from '../api';
import Button from './Button';

interface MessageInputProps {
  username: string;
  onSubmit: () => void;
}

const MessageInput = ({ username, onSubmit }: MessageInputProps) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    postPost(message, username).then((res) => {
      console.log(res.data);
      setMessage('');
      onSubmit();
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
      <Button variant="primary" onClick={sendMessage}>
        Send
      </Button>
    </div>
  );
};

export default MessageInput;
