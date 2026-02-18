import "./news.css";

export function News({ title, description }) {
  const handleClick = (name) => {
    alert(`${name}, Kliknieto przyciisk`);
  };
  return (
    <div className="glass-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="buttons">
        <button onClick={() => handleClick("Kacper")} className="like">
          LIKE
        </button>
        <button className="dislike">DISLIKE</button>
      </div>
    </div>
  );
}
