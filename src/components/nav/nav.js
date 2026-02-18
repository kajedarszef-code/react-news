import "./nav.css";

export function Nav() {
  const handleInput = (e) => {
    console.log("Kliknieto: ", e.target.value);
  };
  return (
    <nav>
      <span>
        <i class="fa-brands fa-apple"></i>
      </span>

      <ul>
        <li>
          <i class="fa-solid fa-gauge"></i>DASHBOARD
        </li>
        <li>
          <i class="fa-solid fa-newspaper"></i>NEWS
        </li>
        <li>
          <i class="fa-solid fa-pizza-slice"></i>USER
        </li>
        <li>
          <input placeholder="search" onChange={handleInput}></input>
        </li>
      </ul>
    </nav>
  );
}
