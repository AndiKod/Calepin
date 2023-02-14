// Get the md page name from the URL
const queryString = window.location.search;
const urlparts = queryString.split("=");
// Create the target for the <zero-md> tag
const src = "./md/"+urlparts[1]+".md";
const htm = "./htm/"+urlparts[1]+".html";


// Dynamic Title for the pages config
const title = urlparts[1]+" | Calepin"
// Set the page Title
document.title = title;

// If no url params, load md/Home.md    
let url = window.location.href;
if (url.indexOf('?') == -1) {
	window.location.replace(url+"/?page=Home");       
}


// Get the Markdown from the page in the URL  
fetch(src).then(function(response) {
	    return response.text();
}).then(function(markdown) {

// Convert to HTML with Showdown	
const converter = new showdown.Converter();
const html = converter.makeHtml(markdown);  
document.getElementById('sd').innerHTML = html;

}).catch(function(err) {  
	    console.log('Fetch Error', err);  
	
});



