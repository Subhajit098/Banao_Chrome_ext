// chrome.tabs.getCurrent({active:true, currentWindow: true},(tab)=>{
//     var title = tab.title;
//     document.getElementById("title").textContent=title;
// })
    // let queryOptions = { active: true, lastFocusedWindow: true };
    // // `tab` will either be a `tabs.Tab` instance or `undefined`.
    // let tab = await chrome.tabs.getCurrent(title);
    // return tab.title;
    let new_title

    chrome.tabs.getSelected(null,tab=>{
       new_title =tab.title;
    })

  document.getElementById("title").textContent=new_title;
