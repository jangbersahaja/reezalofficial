import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Post from "./pages/Post";
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

        <Route path="/post" component={Post} />

        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactMe} />
        <Route path="/kepalabatas" component={KepalaBatas} />
      </Switch> 
    </BrowserRouter>
  );
};

export default App;
