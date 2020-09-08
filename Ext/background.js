const mnuId = "reload-always";

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId == mnuId) {
        chrome.tabs.reload(null);
    }
});

chrome.contextMenus.create({
    id: mnuId,
    title: "Refresh",
    contexts: ["all"],
});