import { useEffect } from 'react';
import FeedItem from './FeedItem';
import { Post } from '../types';

interface FeedProps {
  posts: Post[];
  username: string;
}

const Feed = ({ posts, username }: FeedProps) => {
  const scrollToBottom = () => {
    const element = document.getElementById('scroll-to-bottom');
    if (element) {
      element.scrollIntoView();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [posts]);

  return (
    <div className="border-gray flex h-full flex-col gap-2 overflow-y-scroll rounded-md border px-2 pt-2">
      {posts.map((post) => (
        <FeedItem
          key={post.id}
          content={post.content}
          posterName={post.poster_name}
          createdAt={new Date(post.created_at)}
          username={username}
        />
      ))}
      <div id="scroll-to-bottom" />
    </div>
  );
};

export default Feed;
