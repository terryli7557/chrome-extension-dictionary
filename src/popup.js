function openWinow(keyword){
  window.open(
    "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/" +
    keyword
  );
}


chrome.tabs.query(
  { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
  function(tab) {
    chrome.tabs.sendMessage(tab[0].id, { method: "getSelection" }, function(
      response
    ) {
      if (response && response.data) {
        openWinow(response.data)
      }
    });
  }
);


window.addEventListener('DOMContentLoaded', () => {

  document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    var v = document.querySelector('#dictionary_q').value;
    if(v){
      openWinow(v)
    }
  })
});


