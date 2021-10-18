import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Post from "./pages/Post";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import KepalaBatas from "./pages/KepalaBatas";

import Media from "./pages/Media";
import ScrollToTop from "./pages/ScrollToTop";

import RumahIkram from "./components/KPI/RumahIkram";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop smooth />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/blog" component={Blog} />
        <Route path="/post" component={Post} />
        <Route path="/post" component={Post} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactMe} />
        <Route path="/kepalabatas" component={KepalaBatas} />
        <Route path="/rumahikram" component={RumahIkram} />
        <Route path="/media" component={Media} />
      </Switch> 
    </BrowserRouter>
  );
};

export default App;
