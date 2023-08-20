// chrome.tabs.getCurrent({active:true, currentWindow: true},(tab)=>{
//     var title = tab.title;
//     document.getElementById("title").textContent=title;
// })
const  getCurrentTab=async()=>{
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let tab = await chrome.tabs.getCurrent(title);
    return tab.title;
  }

  const new_title=getCurrentTab();

  document.getElementById("title").innerHTML=new_title;
