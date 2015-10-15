var SnippetCreate = React.createClass({
  render: function (){
    var body = this.props.body || "function(){ return 'hello world'};";
    // var title = this.props.title;

    return (
      <div className="container snippetcreator">
        <div className="row stretch-height">
          <div className="col-md-6 stretch-height">
            <textarea class="form-control" rows="20"></textarea>
          </div>
          <div className="col-md-6 stretch-height">
            <pre className="prettyprint stretch-height">{body} </pre>
          </div>
        </div>




      </div>

    )
  }
})
