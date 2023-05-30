import './App.css';
import News from './components/News/News';
import Rates from './components/Rates/Rates';
import Search from './components/Search/Search';
import Promo from './components/Promo/Promo';
import Widgets from './components/Widgets/Widgets';

const newsTitles = [];
const newsItems = [];
const ratesItems = [];
const searchTitles = [];
const dayLink = {};
const promo = {};
const widgetsItems = [];

/** Отображает всю страницу */

function App() {
  const onSelectMore = () => {
    // функция, отображающая всплывающее окно при клике на кнопку "еще"
  };

  return (
    <div className="App">
      <News titles={newsTitles} items={newsItems} />
      <Rates items={ratesItems} onSelectMore={onSelectMore} />
      <Search titles={searchTitles} dayLink={dayLink} />
      <Promo item={promo} />
      <Widgets items={widgetsItems} />
    </div>
  );
}

export default App;
