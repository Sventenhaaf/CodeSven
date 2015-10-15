var SnippetCreate = React.createClass({
  render: function (){
    var body = this.props.body || "function(){ return 'hello world'};";
    // var title = this.props.title;

    return (
      <div className="container snippetcreator">
        <div className="row stretch-height">
          <div className="col-md-6 stretch-height">
            <form className="form-horizontal">
              <div className="form-group">
                <label for="codeInput" class="col-sm-2 control-label">Type your code here</label>
                <textarea id="codeInput" className="form-control" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-default">Submit code</button>
            </form>
          </div>
          <div className="col-md-6 stretch-height">
            <strong>Result here</strong>
            <pre className="prettyprint stretch-height">{body} </pre>
          </div>
        </div>




      </div>

    )
  }
})
