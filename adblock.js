//console.log("hello from the adblock background script")

const BLOCKING_RESPONSE = {
    cancel: true
}

const FILTER = {
    urls: blocked_sites
}

const EXTRA_INFO_SPEC = ["blocking"]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("I am going to block:", details.url)
        return BLOCKING_RESPONSE
    },
    FILTER,
    EXTRA_INFO_SPEC
)
