interface FeedItemProps {
  content: string
  posterName: string
  createdAt: Date
}

const FeedItem = ({content, posterName, createdAt}: FeedItemProps) => {
  return (
    <div>
      <span>{posterName}: </span>
      <span>{content}</span>
    </div>
  )
}

export default FeedItem