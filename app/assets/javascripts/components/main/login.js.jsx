var Login = React.createClass({
  getInitialState: function(){
    return  { selected: "login",
              errors: "",
              username: "guest",
              password: "guestguest"};
  },

  clickSubmitHandler: function(e){
    e.preventDefault();
    var userName = document.getElementById("loginUserName").value;
    var password = document.getElementById("loginPassword").value;
    if(this.state.selected === "login"){
      AccountUtil.loginUser(userName, password);
    }
    else { AccountUtil.signupUser(userName, password);  }
    UserStore.addChangeListener(this._onChange);
  },

  clickCancelHandler: function(e){
    e.preventDefault();
    this.props.changed();
  },

  clickToggleLoginSignupHandler: function(e){
    e.preventDefault();
    if (this.state.selected === "login") {
      this.setState({ selected: "signup" });
    }
    else  {
      this.setState({ selected: "login" });
    }

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

  usernameChangeHandler: function(e){
    e.preventDefault();
    this.setState({username: e.target.value});
  },

  passwordChangeHandler: function(e){
    e.preventDefault();
    this.setState({password: e.target.value});
  },

  defaultUsername: function(){
    if (this.state.selected === "login") {
      return "guest";
    }
  },

  defaultPassword: function(){
    if (this.state.selected === "login") {
      return "guestguest";
    }
  },

  showErrors: function(){
    // debugger
    var ans = "";
    for (i = 0; i < this.state.errors.length; i++) {
      ans += this.state.errors[i];
      ans += "\n";
      ans += "\n";
    }
    if (ans) { return ans; }
  },

  render: function(){
    var loginTitle;
    if (this.state.selected === "login") {loginTitle = "Log In";}
    else {loginTitle = "Sign Up Test Phase";}
    var self = this;

    var toggleName;
    if(this.state.selected === "login") {toggleName = "Sign Up";}
    else { toggleName = "Log In"; }

    return(
      <div className="container loginpage">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4" id="loginform">
            <div className="text-center logintitle">{loginTitle}</div>
            <div className="text-center loginerrors">{this.showErrors()}</div>
            <form>
              <div className="form-group">
                <label htmlFor="loginUserName">User Name</label>
                <input type="username" className="form-control" id="loginUserName" onChange={this.usernameChangeHandler} value={this.state.username}></input>
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">Password</label>
                <input type="password" className="form-control" id="loginPassword" onChange={this.passwordChangeHandler} value={this.state.password}></input>
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
                <button type="submit" className="col-md-3 btn btn-success" onClick={this.clickToggleLoginSignupHandler} >{toggleName}</button>
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
