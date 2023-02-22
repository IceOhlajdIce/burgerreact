import { Catalog } from './components/Catalog/Catalog.jsx';
import { Header } from './components/Header/Header.jsx';
import { Navigation } from './components/Navigation/Navigation.jsx';

export const App = () => {

  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <footer></footer>
    </>
  )
}