$(function () {
  var root = document.getElementById('allsnippets');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({

    getInitialState: function(){
      return {view: "create"};
    },

    toggleView: function(event){
      event.preventDefault();
      if (this.state.view === "create"){
        this.setState({view: "browse"});
      }
      else {
        this.setState({view: "create"});
      }
      // debugger;
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
      <Route path="/" component={App}>
        <IndexRoute component={SnippetsIndex}/>
        <Route path="createsnippet" component={SnippetCreate}/>
        <Route path="snippetbrowse" component={SnippetBrowse}/>
      </Route>
    </Router>
  ), root);
});
