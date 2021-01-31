console.log("hello from content script")
console.log(document.location.href)

chrome.runtime.onMessage.addListener(function (request) {
    alert(request)
})