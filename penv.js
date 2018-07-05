document.addEventListener('dblclick', function(){
  if(window.getSelection() != "")
  {
    //alert(window.getSelection().toString());
    chrome.runtime.sendMessage(window.getSelection().toString());
  }
});
