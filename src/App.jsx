import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Post from "./pages/Post";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import KepalaBatas from "./pages/KepalaBatas";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/preview" component={Home} exact />
        <Route path="/preview/blog" component={Blog} />
        <Route path="/preview/post" component={Post} />
        <Route path="/preview/about" component={About} />
        <Route path="/preview/contact" component={ContactMe} />  
        <Route path="/preview/kepalabatas" component={KepalaBatas} />   
      </Switch>
    </BrowserRouter>
  );
};

export default App;
