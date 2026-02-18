import "./news.css";

export function News({title}) {
  return (
    <div class="glass-card">
      <h3>{title}</h3>
      <p>DESCRIPTION</p>

      <div class="buttons">
        <button class="like">LIKE</button>
        <button class="dislike">DISLIKE</button>
      </div>
    </div>
  );
}
