var SnippetCreate = React.createClass({
  getInitialState: function(){
    return ({
      result: "function(){ return 'hello world'};",
      saveButtonClicked: false
    });
  },

  runCode: function(){
    var input = document.getElementById("codeInput").value;
    this.setState({ result: input});
  },

  saveCode: function(){
    this.setState({saveButtonClicked: true});
    var title = this.makeid();
    var input = document.getElementById("codeInput").value;
    var data = {title: title, body: input};
    // debugger;
    ApiUtil.saveSnippet(data);
    this.setState({result: ""});
    input = "";
  },

  makeid: function (){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( var i=0; i < 8; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    },

  render: function (){

    var titleInputField;
      if (this.state.saveButtonClicked) {
        titleInputField = <TitleInput />;
      } else {
        titleInputField = null;
      }
      
    return (
      <div className="container snippetcreator">
        <div className="row stretch-height">
          <div className="col-md-6 stretch-height">
            {titleInputField}
            <form className="form-horizontal">
              <div className="form-group">
                <label for="codeInput" className="control-label">Type your code here</label>
                <textarea id="codeInput" className="form-control" rows="4"></textarea>
              </div>
              <button onClick={this.runCode} type="submit" className="btn btn-default">Run code</button>
              <button onClick={this.saveCode} type="submit" className="btn btn-default">Save code</button>
            </form>
          </div>
          <div className="col-md-6 stretch-height">
            <p className="resultTitle" ><strong >Result here</strong></p>
            <pre id="resultCode" className="prettify lang-js">{this.state.result}</pre>
          </div>
        </div>




      </div>

    )
  }
})
