interface PostProps {
  author: string;
  body: string;
  date: number | (() => number);
}

export function Post(props: PostProps) {
  const currentDate =
    typeof props.date === 'function' ? props.date() : props.date || Date.now();
  return (
    <div className="posts">
      <p>{props.author}</p>
      <p>{props.body}</p>
      <p>{new Date(currentDate).toLocaleDateString()}</p>
    </div>
  );
}
