import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Post2 from "./pages/Post2";
import Post3 from "./pages/Post3";
import Post4 from "./pages/Post4";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import KepalaBatas from "./pages/KepalaBatas";
import ScrollToTop from "./pages/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/blog" component={Blog} />
        <Route path="/post" component={Post} />
        <Route path="/post2" component={Post2} />
        <Route path="/post3" component={Post3} />
        <Route path="/post4" component={Post4} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactMe} />
        <Route path="/kepalabatas" component={KepalaBatas} />
      </Switch> 
    </BrowserRouter>
  );
};

export default App;
