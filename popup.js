function injectTheScript() {
    var find = document.getElementById('20s');
    chrome.tabs.query({active:  true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.sendMessage(tabs[0].id, {"message": find.value});
    });
}

document.getElementById('clickactivity').addEventListener('click', injectTheScript);
