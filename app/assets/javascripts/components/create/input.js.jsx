var TitleInput = React.createClass({
  getInitialState: function(){
    return {errors: ["Snippet Title:"]};
  },

  _onChange: function () {
    if (SnippetStore.allErrors()[0] === "Success"){ this.props.clicked(); }
    this.setState({ errors: SnippetStore.allErrors(), });
  },

  handleSave: function(e){
    e.preventDefault();
    var title = document.getElementById("snippetTitle").value;
    var body = this.props.body;
    var data = {title: title, body: body};
    ApiUtil.saveSnippet(data);
    SnippetStore.addInputChangeListener(this._onChange);
  },

  navigateToCreate: function(){
    this.props.history.pushState(null, "/");
  },

  handleCancel: function(event){
    event.preventDefault();
    this.props.clicked();
  },

  render: function(){
    return (
      <form>
        <label id="saveerrors" htmlFor="snippetTitle">{this.state.errors}</label>
        <input id="snippetTitle" type="text" className="form-control" placeholder="Snippet Title"></input>
        <button onClick={this.handleCancel} type="submit" className="btn btn-default btn-sm">
          <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span> Cancel</button>
        <button onClick={this.handleSave} type="submit" className="btn btn-default btn-sm">
          <span className="glyphicon glyphicon-save" aria-hidden="true"></span> Save Code</button>
      </form>
    )
  }
});
