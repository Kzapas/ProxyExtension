var config = {
mode: "fixed_servers",
rules: {
singleProxy: {
scheme: "http",
host: "154.16.27.90",
port: parseInt("45785")
},
bypassList: ["foobar.com"]
}
};
chrome.proxy.settings.set({value: config, scope: "regular"}, function() {});
function callbackFn(details) {
return {
authCredentials: {
username: "Seladnaneren86",
password: "A2x1CfW"
}
};
}

chrome.webRequest.onAuthRequired.addListener(
callbackFn,
{urls: ["<all_urls>"]},
['blocking']
);