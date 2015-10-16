var SnippetCreate = React.createClass({
  getInitialState: function(){
    // debugger;
    return ({
      codeBody: "function(){ return 'hello world'};",
      showTitleField: false
    });
  },

  runCode: function(e){
    e.preventDefault();
    var input = document.getElementById("codeInput").value;
    this.setState({ codeBody: input});
  },

  saveCode: function(e){
    e.preventDefault();
    var codeBody = document.getElementById("codeInput").value;
    this.setState({
      codeBody: codeBody,
      showTitleField: true});
  },

  makeid: function (){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( var i=0; i < 8; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    },

    removeTitle: function(){
      this.setState({showTitleField: false});
    },

  render: function (){

    var titleInputField;
      if (this.state.showTitleField) {
        titleInputField = <TitleInput clicked={this.removeTitle} body={this.state.codeBody}/>;
      } else {
        titleInputField = null;
      }

    return (
      <div className="container snippetcreator">
        <div className="row stretch-height">
          <div className="col-md-6 stretch-height">
            <button onClick={this.runCode} type="submit" className="btn btn-default">
              <span className="glyphicon glyphicon-play" aria-hidden="true"></span> Run code</button>
            <button onClick={this.saveCode} type="submit" className="btn btn-default">
              <span className="glyphicon glyphicon-save" aria-hidden="true"></span> Save code</button>
            {titleInputField}
            <form className="form-horizontal">
              <div className="form-group">
                <label htmlFor="codeInput" className="control-label">Type your code here</label>
                <textarea id="codeInput" className="form-control" rows="4"></textarea>
              </div>


            </form>
          </div>
          <div className="col-md-6 stretch-height">
            <p className="resultTitle" ><strong >Result here</strong></p>
            <pre id="resultCode" className="prettify lang-js">{this.state.codeBody}</pre>
          </div>
        </div>




      </div>

    )
  }
})
