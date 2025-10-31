function shouldRedirect(url) {
  return (
    url.includes("www.youtube.com/watch") &&
    !url.includes("&t=") &&
    !url.includes("&list=")
  );
}

async function openIncognito(url, tabId) {
  chrome.windows.create({
    url: url,
    incognito: true,
    focused: true
  });

  chrome.tabs.remove(tabId);
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!changeInfo.url) return;

  const url = changeInfo.url;

  if (shouldRedirect(url)) {
    openIncognito(url, tabId);
  }
});
