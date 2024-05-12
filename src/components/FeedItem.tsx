interface FeedItemProps {
  content: string;
  posterName: string;
  createdAt: Date;
}

const FeedItem = ({ content, posterName, createdAt }: FeedItemProps) => {
  return (
    <div className="group rounded-md bg-slate-100 px-2 py-1">
      <div className="flex justify-between">
        <span className="overflow-hidden text-ellipsis font-semibold">
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
