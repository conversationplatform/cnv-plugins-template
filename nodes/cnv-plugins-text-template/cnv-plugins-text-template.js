module.exports = function (RED) {
  function TextTemplate(config) {
    RED.nodes.createNode(this, config);

    this.on("input", function (msg, send, done) {
      let data = {
        text: config.text,
        delay: parseInt(config.delay, 10),
      };
      if(config.useOptionsFromMessage){
        data.text = msg.options;
      }
      msg.websocket.sendText("cnv-plugins-text-template", data, this.id);
      send(msg);
      done();
    });
  }
  RED.nodes.registerType("cnv-plugins-text-template", TextTemplate);
};
