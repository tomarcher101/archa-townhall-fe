import { useState } from 'react';
import { postPost } from '../api';
import Button from './Button';
import { toast } from 'react-toastify';

interface MessageInputProps {
  username: string;
  onSubmit: () => void;
}

const MessageInput = ({ username, onSubmit }: MessageInputProps) => {
  const [message, setMessage] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  const sendMessage = () => {
    postPost(message, username)
      .then(() => {
        onSubmit();
        setMessage('');
        toast.success('Message sent');
      })
      .catch((err) => {
        const errorMessage =
          err.response?.data?.content[0] || 'An error occurred';
        toast.error(errorMessage);
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
        onKeyDown={handleKeyDown}
        autoFocus
      />
      <Button variant="primary" onClick={sendMessage}>
        Send
      </Button>
    </div>
  );
};

export default MessageInput;
