// import posts from '../data/posts.json';
import { useEffect, useState } from 'react';
import FeedItem from './FeedItem';
import { getPosts } from '../api';
import { Post } from '../types';

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const scrollToBottom = () => {
    const element = document.getElementById('scroll-to-bottom');
    if (element) {
      element.scrollIntoView();
    }
  };

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res.data);
    });
  }, []);

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
