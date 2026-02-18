import "./news.css";

export function News({ title, description }) {
  return (
    <div class="glass-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <div class="buttons">
        <button class="like">LIKE</button>
        <button class="dislike">DISLIKE</button>
      </div>
    </div>
  );
}
