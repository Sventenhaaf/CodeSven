var TotalCreate = React.createClass({
  getInitialState: function(){
    return ({ codestring: "" });
  },

  componentDidMount: function(){
    var editor = CodeMirror.fromTextArea(document.getElementById("totalcodemirror"), {
      lineNumbers: true,
      matchBrackets: true,
      continueComments: "Enter",
      extraKeys: {"Ctrl-Q": "toggleComment"},
      autofocus: true
    });
    var that = this;
    editor.on("change", function(cm, change) {
      var letter = change.text[0];
      that.handleChange(cm.getValue());
    });

    interpreterManager.initialize();
  },

  handleChange: function(letter){
    this.setState({codestring: letter});
  },

  saveCode: function(e){
    e.preventDefault();
    var codeBody = document.getElementById("codeInput").value;
    this.setState({
      codeBody: codeBody,
      showTitleField: true});
  },

  removeTitle: function(){
    this.setState({showTitleField: false});
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
        <form id="interpreter_form" autocomplete="off">

          <div className="col-md-1" id="totalleftmost">margin left</div>

          <div className="col-md-3">
            <button className="btn btn-default btn-sm" type="submit" form="interpreter_form" value="Submit">
              <span className="glyphicon glyphicon-play" aria-hidden="true"></span> Run
            </button>
            <button onClick={this.saveCode} className="btn btn-default btn-sm">
              <span className="glyphicon glyphicon-save" aria-hidden="true"></span> Save code
            </button>
            {titleInputField}
            <textarea id="totalcodemirror" ref="cminput"></textarea>
          </div>

          <div id="multiline" className="col-md-1">
            <textarea id="interpreter_textarea" name="input_textarea" type="text" className="textbox form-control" rows="10" value={this.state.codestring}>
            </textarea>
          </div>

          <div className="col-md-2" id="totalmiddle">this is blank space</div>

          <div id="interpreter_area" className="col-md-3">
            <div id="interpreter_output" value="hello"></div>
          </div>

          <div className="col-md-2" id="totalrightmost">margin right</div>
        </form>
      </div>
    );
  }
});
