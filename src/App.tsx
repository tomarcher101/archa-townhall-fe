import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ToastContainer, toast } from 'react-toastify';
import Feed from './components/Feed';
import MessageInput from './components/MessageInput';
import NameModal from './components/NameModal';
import { getPosts } from './api';
import { Post } from './types';
import 'react-toastify/dist/ReactToastify.css';

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
    getPosts()
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        const errorMessage =
          err.response?.data?.content[0] || 'An error occurred';
        toast.error(errorMessage);
      });
  };

  useEffect(() => {
    refreshFeed();
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-sky-600 p-4">
      <ToastContainer />
      {showModal && <NameModal submitUsername={submitUsername} />}
      <div className="flex h-full w-full max-w-[600px] flex-col gap-2 rounded-xl bg-white p-4 sm:max-h-[800px]">
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-bold">Townhall</h1>
          <p className="text-slate-600">
            Welcome to The Townhall. Drop a message below!
          </p>
        </div>
        <Feed posts={posts} username={username} />
        <MessageInput username={username} onSubmit={refreshFeed} />
      </div>
    </div>
  );
}

export default App;
