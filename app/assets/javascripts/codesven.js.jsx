

  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    getInitialState: function(){
      return {view: "/create"};
    },

    toggleView: function(event){
      event.preventDefault();
      var toggle = this.props.location.pathname === "/browse" ? "create" : "browse";
      this.props.history.pushState(null, toggle);
      this.setState({ view: toggle});
    },

    render: function(){
      return (
        <div className="container">
          <div className="container">
            <h1 className="pull-left" >Welcome to CodeSven</h1>
            <button className="pull-right" onClick={this.toggleView}><h1>Toggle Browse / Create</h1></button>
          </div>
          <br></br><br></br>
          {this.props.children}
        </div>
      );
    }
  });

function startCodeSven(){
  var root = document.getElementById('allsnippets');
  React.render((
    <Router>
      <Route path="/" component={App}>
          <IndexRoute component={SnippetCreate} />
          <Route path="create" component={SnippetCreate}>
            <Route path="save" component={TitleInput} />
          </Route>
          <Route path="browse" component={SnippetBrowse} />
      </Route>
    </Router>
  ), root);
};
