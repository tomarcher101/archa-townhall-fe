import Avatar from './Avatar';
import Message from './Message';

interface FeedItemProps {
  content: string;
  posterName: string;
  createdAt: Date;
}

const FeedItem = ({ content, posterName, createdAt }: FeedItemProps) => {
  return (
    <div className="rounded-md bg-slate-100 px-2 py-1">
      <div className="overflow-hidden text-ellipsis font-semibold">
        {posterName}
      </div>
      <div className="break-words">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default FeedItem;
