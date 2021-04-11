// chrome.runtime.onInstalled.addListener(function() {
//     chrome.tabs.onActivated.addListener(async info => {
//     //   const tab = await chrome.tabs.get(info.tabId);
      
      
    
//         chrome.tabs.query({
//             active: true,
//             currentWindow: true
//         }, ([currentTab]) => {
//             console.log(currentTab.id);
//             // alert(currentTab.title);
//             // alert(currentTab.url);
//             // chrome.pageAction.show(tabId);

//             if (currentTab.url) {
//                 if (currentTab.url.startsWith("https//www.google.com/search")) {
//                     chrome.pageAction.show(tabId);
//                 } else {
//                     chrome.pageAction.hide(tabId);
//                 }
//               }


//         });

//         // chrome.tabs.query(
//         //     {
//         //         active: true,
//         //         lastFocusedWindow: true
//         //     }, 
//         //     function(tabs) {
//         //         // and use that tab to fill in out title and url
//         //         var tab = tabs[0];
//         //         console.log(tab.url);
//         //         alert(tab.url);

//         //         const isGithub = tab.url.startsWith("https//www.google.com/search");
//         //         isGithub 
//         //         ? chrome.action.enable(tab.tabId) 
//         //         : chrome.action.disable(tab.tabId);

//         //     }
//         // );


      
//     });
//   });



// function checkForValidUrl(tabId, changeInfo, tab) 
// {
//     if(typeof tab != "undefined" && typeof tab != "null" )
//     {
//         // If the tabs URL contains "specificsite.com"...
//         //This would work in the same way as *specificsite.com*, with 0 or more characters surrounding the URL.
//         if (tab.url.startsWith("https//www.google.com/search")) {
//         {
//             // ... show the page action.
//             chrome.pageAction.show(tabId);
//         }
//     }
// };

// // Listen for any changes to the URL of any tab.
// chrome.tabs.onUpdated.addListener(checkForValidUrl);






// var alertError = function(arg){
//     if(arg.url.match(/https:\/\/google\.com\/*/) == null){
//         alert('Something');
//     }
// };
// chrome.browserAction.onClicked.addListener(alertError);
// chrome.tabs.onActivated.addListener(function(info){
//     chrome.tabs.get(info.tabId, function(change){
//         if(change.url == undefined){
//             chrome.browserAction.setPopup({tabId: info.tabId, popup: ''});
//             chrome.browserAction.setIcon({path: './icons/icon-disabled.ico', tabId: info.tabId});
//             console.log('undefined');
//         }
//             else if(change.url.match(/https:\/\/google\.com\/*/) == null){
//             chrome.browserAction.setPopup({tabId: info.tabId, popup: ''});
//             chrome.browserAction.setIcon({path: './icons/icon-disabled.ico', tabId: info.tabId});
//             console.log('not matching');
//         }
//         else{
//             chrome.browserAction.setPopup({tabId: info.tabId, popup: './popup.html'});
//             chrome.browserAction.setIcon({path: './icons/life2coding.ico', tabId: info.tabId});
//             console.log('matched');
//         }
//     });
// });


// chrome.tabs.onUpdated.addListener(function (tabId, change, tab){
//     if(tab.url == undefined){
//         return;
//     }
//     else if(tab.url.match(/https:\/\/google\.com\/*/) == null){
//         chrome.browserAction.setPopup({tabId: tabId, popup: ''});
//         chrome.browserAction.setIcon({path: './icons/icon-disabled.ico', tabId: tabId});
//         console.log('not matching');
//     }
//     else{
//         chrome.browserAction.setPopup({tabId: tabId, popup: './popup.html'});
//         chrome.browserAction.setIcon({path: './icons/life2coding.ico', tabId: tabId});
//         console.log('matched');
//     }
// });






// chrome.runtime.onInstalled.addListener(function(details) {
//     var rule = {
//       conditions: [
//         new chrome.declarativeContent.PageStateMatcher({
//           pageUrl: { hostSuffix: 'google.com' },
//         })
//       ],
//       actions: [ new chrome.declarativeContent.ShowPageAction() ]
//     };
  
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//       chrome.declarativeContent.onPageChanged.addRules([rule]);
//     });
//   });