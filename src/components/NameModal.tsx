import { useState } from 'react';
import Button from './Button';

interface NameModalProps {
  submitUsername: (value: string) => void;
}

const NameModal = ({ submitUsername }: NameModalProps) => {
  const [nameInput, setNameInput] = useState<string>('');

  return (
    <div className="absolute flex h-screen w-screen items-center justify-center bg-slate-800">
      <div className="m-4 flex flex-col gap-2 rounded-lg bg-white p-4">
        <h1 className="text-lg font-bold">Welcome to Townhall!</h1>
        <p>Please enter a screen name, or choose to message anonymously</p>
        <input
          className="border-gray w-full rounded-md border px-2 py-1"
          type="text"
          placeholder="Enter name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') submitUsername(nameInput);
          }}
          maxLength={50}
          autoFocus
        />
        <div className="flex gap-2">
          <Button
            variant="primary"
            onClick={() => submitUsername(nameInput)}
            disabled={nameInput.length < 1}
          >
            Confirm
          </Button>
          <Button variant="secondary" onClick={() => submitUsername('Anon')}>
            Stay Anonymous
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NameModal;
