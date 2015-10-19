// var App = React.createClass({
//   getInitialState: function(){
//     return {
//       view: "/create",
//       username: ", " + window.CURRENT_USER,
//       browseCreateButton: "browse"
//     };
//   },
//
//
//   toggleView: function(event){
//     event.preventDefault();
//     var toggle = this.props.location.pathname === "/browse" ? "create" : "browse";
//     this.props.history.pushState(null, toggle);
//     this.setState({ view: toggle});
//     this.browseCreateButton();
//
//   },
//
//   browseCreateButton: function(){
//     var buttonName = this.props.location.pathname === "/browse" ? "browse" : "create";
//     this.setState({ browseCreateButton: buttonName});
//   },
//
//   handleLogout: function(){
//     AccountUtil.logOutUser();
//   },
//
//   handleLogin: function(){
//     debugger
//     // this.props.history.pushState(null, "/session/new");
//   },
//
//   render: function(){
//     return (
//       <div className="container">
//
//         <nav className="navbar navbar-default">
//           <div className="container-fluid">
//             <div className="navbar-header">
//               {/* Keep this in for Mobile! */}
//               <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
//                 <span className="sr-only">Toggle navigation</span>
//                 <span className="icon-bar"></span>
//                 <span className="icon-bar"></span>
//                 <span className="icon-bar"></span>
//               </button>
//               <a className="navbar-brand" href="#">Welcome to CodeSven{this.state.username}!</a>
//             </div>
//             <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//               <ul className="nav navbar-nav">
//               </ul>
//               <form className="navbar-form navbar-right">
//                 <button onClick={this.handleLogout} type="submit" className="btn btn-default">Log Out</button>
//                 </form>
//                 <form className="navbar-form navbar-right">
//                 <button onClick={this.handleLogin} type="submit" className="btn btn-default">Log in</button>
//               </form>
//                 <form className="navbar-form navbar-right">
//                 <button onClick={this.toggleView} type="submit" className="btn btn-default">{this.state.browseCreateButton}</button>
//               </form>
//             </div>
//           </div>
//         </nav>
//
//         {this.props.children}
//       </div>
//     );
//   }
// });
