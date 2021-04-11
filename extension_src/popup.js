// chrome.tabs.getCurrent(function(tab){
//     chrome.tabs.sendMessage(tab.id, {type:"getText"}, function(response){
//         alert(response)
//         $("#text").text(response);
//     });
// });

// chrome.tabs.query({}, tabs => {
//     tabs.forEach(tab => {
//     chrome.tabs.sendMessage(tab.id, msgObj);
//   });
// });

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('button').addEventListener('click', onclick,false);

    function onclick(){
        chrome.tabs.query({currentWindow:true,active:true},
            function(tabs){
                chrome.tabs.sendMessage(tabs[0].id,"hi");
            }
        )
    }
},false)