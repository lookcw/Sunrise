let changeColor = document.getElementById('changeColor');
let area = document.getElementsByTagName("input");
console.log(area)
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
    let color = element.target.value;
    console.log("sajfaiwoefhlawehfifhlaiefhawiefhwaei");
    let area = document.getElementsByTagName("input");
console.log(area);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };