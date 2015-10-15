var TitleInput = React.createClass({
  cancelSave: function(){

  },

  navigateToCreate: function(){
    this.props.history.pushState(null, "/");
  },
  handleCancel: function(event){
    event.preventDefault();
    this.navigateToCreate();
  },

  render: function(){
    return (
      <form>
        <input type="text" className="form-control" placeholder="Snippet Title"></input>
        <button onClick={this.handleCancel} type="submit" className="btn btn-default">Cancel</button>
        <button onClick={this.saveCode} type="submit" className="btn btn-default">Save Code</button>
      </form>

    )
  }
});
