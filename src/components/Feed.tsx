import { useEffect } from 'react';
import FeedItem from './FeedItem';
import { Post } from '../types';

interface FeedProps {
  posts: Post[];
}

const Feed = ({ posts }: FeedProps) => {
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
    <div className="flex flex-col gap-2 overflow-y-scroll">
      {posts.map((post) => (
        <FeedItem
          key={post.id}
          content={post.content}
          posterName={post.poster_name}
          createdAt={new Date(post.created_at)}
        />
      ))}
      <div id="scroll-to-bottom" />
    </div>
  );
};

export default Feed;
