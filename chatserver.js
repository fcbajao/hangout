var nowjs = require('now');
var everyone;

exports.init = function(server) {
  everyone = nowjs.initialize(server);

  everyone.now.setName = function(name) {
    this.now.name = name;
    everyone.now.announceConnect(this.now.name);
  };

  everyone.now.distributeMessage = function(message){
    everyone.now.receiveMessage(this.now.name, message);
  };

  everyone.disconnected(function(){
    everyone.now.announceDisconnect(this.now.name);
  });
};
