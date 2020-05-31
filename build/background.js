chrome.contextMenus.create({
  id: "Take Action",
  title: "Take Action!",
  contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { type: "takeAction" });
  });
});
