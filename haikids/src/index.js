import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";


// views without layouts


import Index from "views/Index.js";
import Team from "page/Team";
import Layanan from "page/Layanan";
import Tentang from "page/Tentang";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/team" exact component={Team}/>
      <Route path="/layanan" exact component={Layanan}/>
      <Route path="/tentang" exact component={Tentang}/>
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
