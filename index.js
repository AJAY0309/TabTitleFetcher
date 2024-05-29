document.getElementById('fetchTitle').addEventListener('click', function() {

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {

        var activeTab = tabs[0];
        var tabTitle = activeTab.title;

        document.getElementById('tabTitle').textContent = tabTitle;
    });
});