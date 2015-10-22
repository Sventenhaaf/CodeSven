var Login = React.createClass({
  getInitialState: function(){
    return  { selected: "login",
              errors: ""};
  },

  clickSubmitHandler: function(e){
    e.preventDefault();
    var userName = document.getElementById("loginUserName").value;
    var password = document.getElementById("loginPassword").value;
    AccountUtil.loginUser(userName, password);
    UserStore.addChangeListener(this._onChange);
  },

  clickCancelHandler: function(e){
    e.preventDefault();
    this.props.changed();
  },

  _onChange: function(){
    var username = UserStore.username();
    if (username) {
      this.props.changed(username);
    }
    else {
      this.setState({errors: UserStore.errorcode()});
    }

  },

  inputChangeHandler: function(e){
    e.preventDefault();
  },

  render: function(){
    var loginTitle;
    if (this.state.selected === "login") {loginTitle = "Log In";}
    else {loginTitle = "Sign Up";}
    var self = this;

    return(
      <div className="container loginpage">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4" id="loginform">
            <div className="text-center logintitle">{loginTitle}</div>
            <div className="text-center loginerrors">{this.state.errors}</div>
            <form>
              <div className="form-group">
                <label htmlFor="loginUserName">User Name</label>
                <input type="username" className="form-control" id="loginUserName" onChange="inputChangeHandler" value="guest"></input>
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">Password</label>
                <input type="password" className="form-control" id="loginPassword" onChange="inputChangeHandler" value="guestguest"></input>
              </div>
              <div className="row submitbutton">
                <div className=""></div>
                <button type="submit" className="col-md-12 btn btn-primary text-center" onClick={this.clickSubmitHandler} >Submit</button>
                <div className=""></div>
              </div>
              <div className="row notsubmitbutton">
                <div className=""></div>
                <button type="submit" className="col-md-3 btn btn-info" onClick={this.clickCancelHandler} >Cancel</button>
                <div className="col-md-6"></div>
                <button type="submit" className="col-md-3 btn btn-success" onClick={this.clickSignupHandler} >Sign Up</button>
                <div className=""></div>
              </div>
            </form>
          </div>
          <div className="col-md-4"></div>

        </div>

      </div>
    );
  }
});
