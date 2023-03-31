import Home from "./Home";
import { Routes, Route} from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

function Pages() {
  return (
    <AnimatePresence>
      <Routes>
        {/* we can use both elment or component but if
          we use componet we should write the component as a js variable not as an html tag */}
        <Route path="/" Component={Home} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />}/>
        <Route path="/recipe/:name" element={<Recipe />}/>
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
