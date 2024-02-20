interface PostProps {
  author: string;
  body: string;
  date?: number;
}

export function Post(props: PostProps) {
  const currentDate = props.date || Date.now();

  const formattedDate = new Date(currentDate).toLocaleString('sv-SE', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  return (
    <div className="posts">
      <p>{props.author}</p>
      <p>{props.body}</p>
      <p>{formattedDate}</p>
    </div>
  );
}
