var MochiInput = React.createClass({

  render: function(){

    return (
      <div>

          <form id="interpreter_form" autocomplete="off">
              <div id="interpreter_area">
                  <div id="interpreter_output" value="hello"></div>
              </div>
              {/*
                <div id="oneline">
                    <input id="interpreter_text" name="input_text" type="text" className="textbox" size="100" />
                </div>
                */}

              <div id="multiline">
                  <textarea id="interpreter_textarea" name="input_textarea" type="text" className="textbox" cols="97" rows="10"></textarea>
                  <br />
              </div>
          </form>
      </div>


    )
  }
});
