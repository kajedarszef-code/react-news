import { useEffect, useState } from "react";
import "./news.css";

export function News({ title, description }) {
  const [likes, setLikes] = useState(0);

  const increaseLikes = (value) => {
    if (likes < 1 && value < 0) {
      return;
    }

    setLikes(likes + value);
  };

  useEffect(() => {
    if (likes > 0) {
      document.title = `(${likes})NOWY LIKE`;
    } else {
      document.title = "Mini Feed App";
    }
  }, [likes]);

  return (
    <div className="glass-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{likes}</span>
      <div className="buttons">
        <button onClick={() => increaseLikes(1)} className="like">
          LIKE
        </button>
        <button onClick={() => increaseLikes(-1)} className="dislike">
          DISLIKE
        </button>
      </div>
    </div>
  );
}
