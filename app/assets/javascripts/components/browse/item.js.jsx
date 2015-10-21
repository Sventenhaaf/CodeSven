var SnippetItem = React.createClass({
  mixins: [ReactRouter.History],
  handleClick: function(e){
    e.preventDefault();
    this.history.pushState(null, "edit/" + this.props.snippet.id);
  },

  render: function (){
    var title = this.props.snippet.title;
    var body = this.props.snippet.body;
    var author = this.props.snippet.author_id;
    return (
      <div className="container">
        <div className="row">

          <div className="col-md-3"></div>

          <div id="snippetcredentials" className="browseitem col-md-3">
            <span>Name: {title}</span>
            <br></br>
            <span>Written By: {author}</span>
          </div>

          <div onClick={this.handleClick} id="snippetitemwrapper" className="browseitem col-md-3">
            {body}
          </div>

          <div className="col-md-3"></div>

        </div>
      </div>
    )
  }
})
