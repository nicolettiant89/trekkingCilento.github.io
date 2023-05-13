function copyToClipboard(source) {
  // Get the text field
  var copyText =  $("#contactSpan").text();

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);
  source = '#'+source;
  // Alert the copied text
  $(source).text("Copiato!");
  setTimeout(function(){
  $(source).text('');
}, 1000);
}