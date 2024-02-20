interface PostProps {
  author: string;
  body: string;
}

export function Post(props: PostProps) {
  return (
    <div>
      <p>{props.author}</p>
      <p>{props.body}</p>
    </div>
  );
}
