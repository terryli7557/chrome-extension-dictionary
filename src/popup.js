chrome.tabs.query(
  { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
  function(tab) {
    chrome.tabs.sendMessage(tab[0].id, { method: "getSelection" }, function(
      response
    ) {
      if (response && response.data) {
        window.open(
          "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/" +
            response.data
        );
      }
    });
  }
);
