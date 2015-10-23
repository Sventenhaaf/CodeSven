var SnippetItem = React.createClass({
  mixins: [ReactRouter.History],
  handleClick: function(e){
    e.preventDefault();
    this.history.pushState(null, "edit/" + this.props.snippet.id);
  },

  render: function (){
    var title = this.props.snippet.title;
    var body = this.props.snippet.body;
    var author = this.props.snippet.author;
    var likes = this.props.snippet.likes;
    return (
      <div className="container">
        <div className="row">

          <div id="snippetcredentials" className="browseitem col-md-3">
            <span>Name: {title}</span>
            <br></br>
            <span>Written By: {author}</span>
            <br></br>
            <span>Likes: {likes}</span>
          </div>

          <div onClick={this.handleClick} id="snippetitemwrapper" className="browseitem col-md-3">
            {body}
            <button className="btn btn-sm likebutton" >
              <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
            </button>
          </div>


        </div>
      </div>
    )
  }
})
