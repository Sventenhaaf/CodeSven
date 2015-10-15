var TitleInput = React.createClass({
  cancelSave: function(){
    
  },

  render: function(){
    return (
      <form>
        <input type="text" className="form-control" placeholder="Snippet Title"></input>
        <button onClick={this.cancelSave} type="submit" className="btn btn-default">Cancel</button>
        <button onClick={this.saveCode} type="submit" className="btn btn-default">Save Code</button>
      </form>

    )
  }
});
