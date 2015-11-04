var TotalCreate = React.createClass({
  getInitialState: function(){
    var codestring;
    if (this.props.snippet) { codestring = this.props.snippet.body; }
    else { codestring = "// result pane will print last evaluation\n// writeln() to print multiple results\n// return() should only be used within functions\n// console.log() will only log in ... the console\n// Now go write some JavaScript!\n\nvar welcome = function (input) {\n  writeln('Welcome to ' + input + '!');\n  writeln('Enjoy your coding!');\n};\n\nwelcome('CodeZen');\n'The last evaluation has a prefix of =>>>';"; }
    return ({ codestring: codestring,
              outputvalue: ""});
  },

  componentDidMount: function(){
    var editor = CodeMirror.fromTextArea(document.getElementById("totalcodemirror"), {
      lineNumbers: true,
      matchBrackets: true,
      continueComments: "Enter",
      extraKeys: {"Ctrl-Q": "toggleComment"},
      autofocus: true,
      theme : 'monokai'
    });
    var that = this;
    editor.on("change", function(cm, change) {
      var letter = change.text[0];
      that.handleChange(cm.getValue());
    });

    interpreterManager.initialize();
  },

  handleChange: function(letter, output){
    this.setState({codestring: letter});
  },

  textareaChange: function(){
  },

  saveCode: function(e){
    e.preventDefault();
    // change this and set to state
    var codeBody = document.getElementById("totalcodemirror").value;
    this.setState({
      codeBody: codeBody,
      showTitleField: true});
  },

  clearResult: function(e){
    e.preventDefault();
    var myNode = document.getElementById("interpreter_output");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  },

  runCode: function(){
    this.handleChange(this.state.codestring);
  },

  removeTitle: function(){
    this.setState({showTitleField: false});
  },

  renderOutput: function(e){
    e.preventDefault();
  },

  render: function(){
    var titleInputField;
      if (this.state.showTitleField) {
        titleInputField = <TitleInput clicked={this.removeTitle} body={this.state.codestring}/>;
      } else {
        titleInputField = null;
      }

    return (
      <div className="row">
        <form id="interpreter_form" autoComplete="off">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-1" id="totalleftmost"></div>

              <div className="col-md-10">
                <button onClick={this.runCode} className="btn btn-default btn-sm" form="interpreter_form" >
                  <span className="glyphicon glyphicon-play" aria-hidden="true"></span> Run
                </button>
                <button onClick={this.saveCode} className="btn btn-default btn-sm">
                  <span className="glyphicon glyphicon-save" aria-hidden="true"></span> Save code
                </button>
                {titleInputField}
                <textarea id="totalcodemirror" onChange={this.textareaChange} ref="cminput" value={this.state.codestring}></textarea>
                  <textarea id="interpreter_textarea" onChange={this.textareaChange} name="input_textarea" type="text" className="textbox form-control" rows="0" value={this.state.codestring}>
                  </textarea>
                </div>
                <div className="col-md-1" id="midleftmost"></div>
              </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-1" id="midrightmost"></div>
              <div id="interpreter_area" className="prettify col-md-10">
                <button onClick={this.clearResult} className="btn btn-default btn-sm">
                  <span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Clear
                </button>
                <pre className='prettyprint' id="interpreter_output"></pre>
              </div>
              <div className="col-md-1" id="totalrightmost"></div>
            </div>
          </div>
        </form>
      </div>
    );
  }
});
