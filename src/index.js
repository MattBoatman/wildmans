import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./PageContent/Home";
import Shop from "./PageContent/Shop";
import PageWrapper from "./PageWrapper";

import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <PageWrapper>
      <Route exact path="/" component={Home} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/shop/:name" component={Shop} />
    </PageWrapper>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
