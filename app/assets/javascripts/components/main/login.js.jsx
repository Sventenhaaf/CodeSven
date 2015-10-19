var Login = React.createClass({
  clickHandler: function(e){
    e.preventDefault();
    var userName = document.getElementById("loginUserName").value;
    var password = document.getElementById("loginPassword").value;
    AccountUtil.loginUser(userName, password);
    UserStore.addChangeListener(this._onChange);

  },

  _onChange: function(){
    var username = UserStore.username();
    this.props.changed(username);
    this.props.show = false;
  },

  render: function(){
    var self = this;
    return(
      <div className="container loginpage">
        <form>
          <div className="form-group">
            <label htmlFor="loginUserName">User Name</label>
            <input type="username" className="form-control" id="loginUserName" placeholder="Username"></input>
          </div>
          <div className="form-group">
            <label htmlFor="loginPassword">Password</label>
            <input type="password" className="form-control" id="loginPassword" placeholder="Password"></input>
          </div>
          <button type="submit" className="btn btn-primary center-block" onClick={this.clickHandler} >Submit</button>
        </form>
      </div>
    );
  }
});
