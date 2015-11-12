var SnippetItem = React.createClass({

  mixins: [ReactRouter.History],

  getInitialState: function(){
    return ({current_user: window.CURRENT_USER,
              liked: !!this.props.snippet.likeid,
              likeid: this.props.snippet.likeid})
  },

  componentDidMount: function(){
    SnippetStore.addChangeListener(this._onChange);
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
    this.setState({liked:true});
  },

  handleUnlikeClick: function(e){
    e.preventDefault();
    var like_id = this.props.snippet.likeid;
    ApiUtil.unlikeSnippet(this.state.likeid);
    this.setState({liked:false});
  },

  _onChange: function () {
    if (SnippetStore.latest() && SnippetStore.latest()[1] === this.props.snippet.id){
      this.setState({ likeid: SnippetStore.latest()[0] });
    }
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
    if (!window.CURRENT_USER){
      likebutton = null;
    }
    else if (this.state.liked){
        likebutton = (
          <button onClick={this.handleUnlikeClick} className="btn btn-sm likebutton">Unlike me</button>
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
                <span>Name: {title} </span>
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
