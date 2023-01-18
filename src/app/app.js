import s from './app.module.css';
import Cards from "../cards";

function App() {
  return (
    <div>
      <div className={s.headline}>Ты сегодня покормил кота?</div>
        <Cards />
    </div>
  );
}

export default App;
