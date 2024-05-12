import { cn } from '../utils';

interface FeedItemProps {
  content: string;
  posterName: string;
  createdAt: Date;
  username: string;
}

const FeedItem = ({
  content,
  posterName,
  createdAt,
  username,
}: FeedItemProps) => {
  const isCurrentUser = username === posterName && username != 'Anon';

  return (
    <div
      className={cn(
        'group rounded-md bg-slate-100 px-2 py-1',
        isCurrentUser && 'bg-sky-200',
      )}
    >
      <div className="flex-row-reversed flex justify-between">
        <span className={cn('overflow-hidden text-ellipsis font-semibold')}>
          {posterName}
        </span>
        <span className="text-gray-400 opacity-0 group-hover:opacity-100">
          {createdAt.toLocaleTimeString()}
        </span>
      </div>
      <div className="break-words">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default FeedItem;
