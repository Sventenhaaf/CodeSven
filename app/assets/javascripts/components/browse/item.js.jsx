var SnippetItem = React.createClass({

  mixins: [ReactRouter.History],

  componentDidMount: function(){
    // hljs.initHighlighting();
  },

  componentWillUnmount: function () {
  },

  handleCodeClick: function(e){
    e.preventDefault();
    this.history.pushState(null, "edit/" + this.props.snippet.id);
  },

  handleLikeClick: function(e){
    e.preventDefault();
    var snippet_id = this.props.snippet.id;
    ApiUtil.likeSnippet(snippet_id);
  },

  handleUnlikeClick: function(e){
    e.preventDefault();
    var like_id = this.props.snippet.likeid;
    ApiUtil.unlikeSnippet(like_id);
  },

  highlight: function (node) {
    if (node){
      hljs.highlightBlock(node.getDOMNode());
    }
  },

  render: function (){
    var title = this.props.snippet.title;
    var body = this.props.snippet.body;
    var author = this.props.snippet.author;
    var likes = this.props.snippet.likes;
    var likebutton;
    // debugger
    if (this.props.snippet.likeid){
        likebutton = (
          <button onClick={this.handleUnlikeClick} className="btn btn-sm likebutton">test</button>
        )
    }
    else{
      likebutton = (
        <button onClick={this.handleLikeClick} className="btn btn-sm likebutton" >
          <span className="glyphicon glyphicon-heart" aria-hidden="true"> Like me!&nbsp;</span>
          <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
        </button>
      )
    }


    return (
          <div className="col-md-6">
            <div className="totalsnippet row-fluid">
              <div onClick={this.handleCodeClick} className="snippetitemwrapper col-md-7">
                <pre><code ref={this.highlight}>{body}</code></pre>
              </div>
              <div className="col-md-5 snippetcredentials">
                <span>Name: {title}</span>
                <br></br>
                <span>Written By: {author}</span>
                <br></br>
                <span>Likes: {likes}</span>
                {likebutton}
              </div>
            </div>
          </div>


    )
  }
})
