// Get the md page name from the URL
const queryString = window.location.search;
const urlparts = queryString.split("=");
// Create the target for the <zero-md> tag
const src = "./md/"+urlparts[1]+".md";
// Load the Markdown
document.getElementById("md").setAttribute("src", src) 

// Dynamic Title for the pages config
const title = urlparts[1]+" | Calepin"
// Set the page Title
document.title = title;

// If no url params, load md/Home.md    
let url = window.location.href;
if (url.indexOf('?') == -1) {
	window.location.replace(url+"/?page=Home");       
}
