var SnippetItem = React.createClass({

  mixins: [ReactRouter.History],
  componentDidMount: function(){
    hljs.initHighlightingOnLoad();
  },

  handleClick: function(e){
    e.preventDefault();
    this.history.pushState(null, "edit/" + this.props.snippet.id);
  },

  render: function (){
    var title = this.props.snippet.title;
    var body = this.props.snippet.body;
    var author = this.props.snippet.author;
    var likes = this.props.snippet.likes;
    var liketext;
    return (

          <div className="col-md-6">
            <div className="totalsnippet row-fluid">
              <div onClick={this.handleClick} className="snippetitemwrapper col-md-6 browseitem">
                <pre><code className="js">{body}</code></pre>
              </div>
              <div className="col-md-5">
                <br></br>
                <span>Name: {title}</span>
                <br></br>
                <span>Written By: {author}</span>
                <br></br>
                <span>Likes: {likes}</span>
                <br></br>
                <button className="btn btn-sm likebutton" >
                  <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
                </button>
                <span>{liketext}</span>
              </div>
            </div>
          </div>


    )
  }
})
