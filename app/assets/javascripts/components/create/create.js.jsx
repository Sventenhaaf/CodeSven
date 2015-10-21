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
          <TotalCreate />
          
      </div>

    )
  }
})
