// components/Post.tsx
import React from 'react';

interface PostProps {
  image: string;
  author: string;
  body: string;
  date?: number;
}

export function Post(props: PostProps) {
  const currentDate = props.date ? new Date(props.date) : new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  const formattedDate = new Intl.DateTimeFormat('sv-SE', options).format(
    currentDate
  );

  return (
    <div className="posts">
      {props.image && (
        <img
          src={`/src/assets/${props.image}`}
          alt={`${props.author}'s avatar`}
        />
      )}
      <p>{props.author}</p>
      <p>{props.body}</p>
      <p>{formattedDate}</p>
    </div>
  );
}
