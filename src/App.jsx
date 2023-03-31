
import Pages from "./pages/Pages";
import Categories from "./components/Categories";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Logo from "./components/Logo";

function App() {
  return (
    <BrowserRouter>
        <Logo />
        <Search />
        <Categories />
        <Pages />
    </BrowserRouter>
  );
}

export default App;
