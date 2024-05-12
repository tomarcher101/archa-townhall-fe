// import posts from '../data/posts.json';
import { useEffect, useState } from 'react';
import FeedItem from './FeedItem';
import { getPosts } from '../api';
import { Post } from '../types';

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <FeedItem
          key={post.id}
          content={post.content}
          posterName={post.poster_name}
          createdAt={new Date(post.created_at)}
        />
      ))}
    </div>
  );
};

export default Feed;
