$(function() {

var chatbox = $('#chatbox');

$('#message').keypress(function(e) {
  var textbox = $(this);
  if (e.which == 13) {
    now.distributeMessage(textbox.val())
    textbox.val('');
  }
});

function appendMessage(message) {
  chatbox.append(message);
  chatbox[0].scrollTop = chatbox[0].scrollHeight;
}

now.receiveMessage = function(name, message){
  appendMessage("<p><span>" + name + ":</span> " + message + '</p>');
}

now.announceConnect = function(name){
  appendMessage('<p class="system"><span>' + name + '</span> is in the house!</p>');
}

now.announceDisconnect = function(name){
  appendMessage('<p class="system"><span>' + name + '</span> is out!</p>');
}

now.ready(function() {
  chatbox.html('');
  now.setName(window.prompt("What's your name?", ""));
});

$('#message').focus();

})
