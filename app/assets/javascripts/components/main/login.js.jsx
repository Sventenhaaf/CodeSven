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
        <div className="row">
          <div className="col-md-4"></div>
          <div id="loginform" className="col-md-4">
            <form>
              <div className="form-group">
                <label htmlFor="loginUserName">User Name</label>
                <input type="username" className="form-control" id="loginUserName" value="guest"></input>
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">Password</label>
                <input type="password" className="form-control" id="loginPassword" value="guestguest"></input>
              </div>
              <button type="submit" className="btn btn-primary center-block" onClick={this.clickHandler} >Submit</button>
            </form>
          </div>
          <div className="col-md-4"></div>

        </div>

      </div>
    );
  }
});
