function openWindow(keyword){
  window.open(
    "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/" +
    keyword
  );
}


chrome.tabs.query(
  { active: true, currentWindow: true },
  function(tab) {
    chrome.tabs.sendMessage(tab[0].id, { method: "getSelection" }, function(
      response
    ) {
      if (response && response.data) {
        openWindow(response.data)
      }
    });
  }
);



document.querySelector('form').addEventListener('submit',function(e){
  e.preventDefault();
  let v = document.querySelector('#dictionary_q').value;
  if(v){
    openWindow(v)
  }
});



