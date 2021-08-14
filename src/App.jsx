import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Preloader } from "./components/Preloader";

import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { DetailsProduct } from "./pages/DetailsProduct";


function App() {
  const [visibility, setVisibility] = useState(true);

  useEffect(() => {
    // setVisibility(false);
    setTimeout(() => setVisibility(false), 1000);
  }, []);

  return (
    <BrowserRouter>
      <Preloader visibility={visibility} />
      <Route path="/" exact component={Home} />
      <Route path="/menu/" component={Menu} />
      <Route path="/detalhes/" component={DetailsProduct} />
    </BrowserRouter>
  );
}

export default App;
