$(function () {
  var root = document.getElementById('allsnippets');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;



  React.render((
    <Router>
      <Route path="/" component={Index} />
    </Router>
  ), root);
});
