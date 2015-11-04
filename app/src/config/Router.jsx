import React                         from "react";
import { Router, Route, IndexRoute } from "react-router";
import history                       from "app/core/history";

import App       from "app/layout/App";
import PostsPage from "app/posts/PostsPage";
import PostPage  from "app/posts/PostPage";

const router = (
  <Router history={ history }>
    <Route path="/" component={ App }>
      <IndexRoute component={ PostsPage } />
      <Route path="posts/:id" component={ PostPage } />
    </Route>
  </Router>
);

export default router;
