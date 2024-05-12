import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Feed from './Feed';
import { FeedProps } from './Feed';
import { Post } from '../types';

const testPosts: Post[] = [
  {
    id: 1,
    content: 'Hello',
    poster_name: 'Tom',
    created_at: '2024-05-12T12:42:23.620198Z',
  },
  {
    id: 2,
    content: "What's up?",
    poster_name: 'Bob',
    created_at: '2024-05-12T12:42:32.724143Z',
  },
  {
    id: 3,
    content: 'Hello there',
    poster_name: 'Anon',
    created_at: '2024-05-12T12:42:39.551493Z',
  },
];

const renderFeed = ({ posts, username }: FeedProps) =>
  render(<Feed posts={posts} username={username} />);

describe('Feed', () => {
  it('renders', () => {
    renderFeed({
      posts: testPosts,
      username: 'Test',
    });
  });

  it('displays the posts', () => {
    renderFeed({
      posts: testPosts,
      username: 'Test',
    });
    screen.getByText('Hello');
    screen.getByText("What's up?");
    screen.getByText('Hello there');
  });
});
