$(function () {
  var root = document.getElementById('allsnippets');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({

    getInitialState: function(){
      return {view: "browse"};
    },

    toggleView: function(event){
      event.preventDefault();
      var toggle = this.state.view === "create" ? "browse" : "create";
      this.props.history.pushState(null, toggle);
      this.setState({ view: toggle});
    },

    render: function(){
      return (
        <div>
          <header><h1>Welcome to CodeSven</h1></header>
          <button onClick={this.toggleView}>Toggle Browse / Create</button>
          {this.props.children}
        </div>
      );
    }
  });

  React.render((
    <Router>
      <Route component={App}>
        <Route component={MainView}>
          <Route path="/" component={SnippetBrowse} />
          <Route path="create" component={SnippetCreate} />
          <Route path="browse" component={SnippetBrowse} />
        </Route>
      </Route>
    </Router>
  ), root);
});
