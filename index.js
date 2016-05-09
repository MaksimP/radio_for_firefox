var self = require("sdk/self");
var { ToggleButton } = require("sdk/ui/button/toggle");
var panels = require("sdk/panel");

var button = ToggleButton({
  id: "button_radio",
  label: "Radio",
  icon: {
    "16" : "./image/radio.png"
  },
  onChange: handleChange
});

var panel = panels.Panel({
  width:310,
  height:400,
  contentURL:"./playList.html",
  onHide: handleHide
});

function handleChange(state){
  if(state.checked){
    panel.show({
      position: button
    });
  }
}

function handleHide(){
  button.state('window', {checked: false});
}


