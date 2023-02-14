<p align="center" width="100%">
  <img width="25%" src="./src/assets/img/calepin-logo.png">
</p>

Bash & Pandoc based Static Site Generator. 

To be used with [sh:erpa](https://github.com/AndiKod/sherpa) CLI Assistant, along with notes management, todos, bookmarks, web search from the console, etc.

## Install 

Clone the repo somewhere. 
```bash
cd ~/Documents
git clone git@github.com:AndiKod/calepin.git
```
Install [sh:erpa](https://github.com/AndiKod/sherpa) and edit the paths inside `sherpa/bin/comp`. Now you can just run `comp` to generate a full website inside /dist from the content in /src. From inside Vim, just use `:!comp` and keep editing.

Add it also as a sh:erpa route, to fully integrate it.

# Basic Usage

The actual version is the starting point of something new.


It now, via Pandoc, include:

- frontmatter data
- layouts
- partial-layouts 
- conditionals & loops in layouts
- code highlight out of the box
- math formulas
- styled divs generated from markdown
- attributes & class/id applied from within markdown
- auto en-dash and em-dash, md to visual checkbox todo, ...

Check the docs about the [Templates](https://pandoc.org/MANUAL.html#templates) and [Pandoc's Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown) on pandoc.org 


It's just a beginning, so for now `src/index.md` will compile to `dist/index.html`, and `src/somepage.md` will compile to `dist/somepage/index.html` to have clean urls like https://mysite.com and https://mysite.com/somepage.



TODO: Looking into custom routes and folder-based content routing


## View in the Browser

There are several ways to do that:

### Serve with Node http-server:

On Linux or Windows WSL, go inside & launch the Server:

```bash
cd ~/Documents/calepin
npx http-server 
```

On the first call it will install it. Your Calepin website is running at http://localhost:8080

### The good old [XAMPP](https://www.apachefriends.org/index.html) or [WAMP](https://www.wampserver.com/en/) 

If you have something like that installed, clone the repo in the specific root, or download and drop it there. 

It's 100% vanilla html/css/js, so 'it works' out-of-da-box. 

```
# Just open it in a browser
firefox http://localhost/calepin
```

### The Python route  

For the record, but one of the above should be enough.

```bash
python -m SimpleHTTPSertver 8080

```
You eventually need to Ctr+F5 to refresh the page. [StackOverflow](https://stackoverflow.com/questions/12193803/invoke-python-simplehttpserver-from-command-line-with-no-cache-option). There are other options around Python (if you run v2 or v3), this one worked for me when testing.


