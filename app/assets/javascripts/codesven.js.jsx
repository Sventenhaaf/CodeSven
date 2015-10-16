  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    getInitialState: function(){
      return {
        view: "/create",
      };
    },

    toggleView: function(event){
      event.preventDefault();
      var toggle = this.props.location.pathname === "/browse" ? "create" : "browse";
      this.props.history.pushState(null, toggle);
      this.setState({ view: toggle});
    },

    handleLogout: function(){
      AccountUtil.logOutUser();
    },

    render: function(){
      return (
        <div className="container">

          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                {/* Keep this in for Mobile! */}
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Welcome to CodeSven!</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                </ul>
                <form className="navbar-form navbar-right">
                  <button onClick={this.handleLogout} type="submit" className="btn btn-default">Log Out</button>
                  </form>
                  <form className="navbar-form navbar-right">
                  <button onClick={this.toggleView} type="submit" className="btn btn-default">Toggle Browse / Create </button>
                </form>
              </div>
            </div>
          </nav>

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
