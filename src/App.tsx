import { useState } from 'react';
import { createPortal } from 'react-dom';
import Feed from './components/Feed';
import MessageInput from './components/MessageInput';
import NameModal from './components/NameModal';

function App() {
  const [username, setUsername] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(true);

  const submitUsername = (value: string) => {
    setUsername(value);
    setShowModal(false);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-300 p-4">
      <div className="flex h-full max-h-[800px] w-full max-w-[600px] flex-col gap-2 rounded-xl bg-white p-4">
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-bold">Townhall</h1>
          <p className="text-slate-600">
            Welcome to The Townhall. Drop a message below!
          </p>
        </div>
        <Feed />
        <MessageInput username={username} />
      </div>
      {showModal &&
        createPortal(
          <NameModal submitUsername={submitUsername} />,
          document.getElementById('modal-root') as HTMLElement,
        )}
    </div>
  );
}

export default App;
