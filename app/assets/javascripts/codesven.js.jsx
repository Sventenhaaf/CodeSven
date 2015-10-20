  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    getInitialState: function(){
      return {
        view: "/create",
        username: window.CURRENT_USER,
        browseCreateButton: "browse",
        showLogin: false
      };
    },

    toggleView: function(event){
      event.preventDefault();
      var toggle = this.props.location.pathname === "/browse" ? "create" : "browse";
      this.props.history.pushState(null, toggle);
      this.setState({ view: toggle});
      this.browseCreateButton();
    },

    browseCreateButton: function(){
      // debugger
      var buttonName = this.props.location.pathname === "/create" ? "create" : "browse";
      this.setState({ browseCreateButton: buttonName});
    },

    toCreate: function(){
      this.props.history.pushState(null, "create");
      this.setState({ browseCreateButton: "create"});
      this.browseCreateButton();
    },

    handleLogout: function(){
      AccountUtil.logOutUser();
    },

    handleLogin: function(){
      this.setState({showLogin: true});
    },

    welcomeMessage: function(){
      if (typeof this.state.username === "undefined"){
        return "Welcome to CodeSven!";
      }
      else { return "Welcome to CodeSven, " + this.state.username + "!";}
    },

    changeUsername: function(username){
      this.setState({username: username});
      this.setState({showLogin: false});
    },

    render: function(){
      var loginField;
        if (this.state.showLogin) {
          loginField = <Login changed={this.changeUsername}/>
        } else {
          loginField = null;
        }

      var loginOrLogout;
        if (this.state.username){
          loginOrLogout = <button onClick={this.handleLogout} type="submit" className="btn btn-default">Log Out</button>
        }
        else {
          loginOrLogout = <button onClick={this.handleLogin} type="submit" className="btn btn-default">Log in</button>
        }

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
                <a className="navbar-brand" onClick={this.toCreate}>{this.welcomeMessage()}</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                </ul>
                  <form className="navbar-form navbar-right">
                  {loginOrLogout}
                </form>
                  <form className="navbar-form navbar-right">
                  <button onClick={this.toggleView} type="submit" className="btn btn-default">{this.state.browseCreateButton}</button>
                </form>
              </div>
            </div>
          </nav>
          {loginField}
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
