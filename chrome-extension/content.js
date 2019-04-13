// content.js
var firstHref = $("a[href^='http']").eq(0).attr("href");
var textArea = $( "textarea" ).val();
console.log(textArea);