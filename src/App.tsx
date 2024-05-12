import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Feed from './components/Feed';
import MessageInput from './components/MessageInput';
import NameModal from './components/NameModal';
import { getPosts } from './api';
import { Post } from './types';

function App() {
  const [username, setUsername] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(true);
  const [posts, setPosts] = useState<Post[]>([]);

  const submitUsername = (value: string) => {
    setUsername(value);
    setShowModal(false);
  };

  const refreshFeed = () => {
    // TODO: Change this to be done via websockets. That way we can get real-time
    // updates to the feed.
    getPosts().then((res) => {
      setPosts(res.data);
    });
  };

  useEffect(() => {
    refreshFeed();
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-sky-600 p-4">
      <div className="flex h-full max-h-[800px] w-full max-w-[600px] flex-col gap-2 rounded-xl bg-white p-4">
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-bold">Townhall</h1>
          <p className="text-slate-600">
            Welcome to The Townhall. Drop a message below!
          </p>
        </div>
        <Feed posts={posts} username={username} />
        <MessageInput username={username} onSubmit={refreshFeed} />
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
