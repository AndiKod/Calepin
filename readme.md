# sh:erpa-Notes

Write plain Markdown and view it in your browser as styled HTML, with zero configuration. Awesome when paierd with the [sh:erpa](https://github.com/AndiKod/sherpa) CLI companion, to manage todos, bookmarks, notes, save to git, etc.

## Install

Clone the repo and name it as you like. You're set.

## View in the Browser

There are several ways to do that:

- Serve in the browser with Node http-server:

On Linux or WinWSL, can be something like...

```bash
cd ~/Documents
git clone git@github.com:AndiKod/sherpa-notes.git myDocs
```
Go inside & launch the Server:

```bash
cd myDocs
npx http-server 
```
It invoke [http-server](https://github.com/http-party/http-server) and spin a server. On the first call it will install it.

Your docs site is running at http://localhost:8080

- The good old [XAMPP](https://www.apachefriends.org/index.html) or [WAMP](https://www.wampserver.com/en/) 

If you have something like that installed, clone the repo in the corresponding root, or download and drop it there. 

It's 100% vanilla html/css/js, so 'it works' out-of-da-box. Then just view it in your browser at http://localhost/myDocs (or whatever alse you named it)  

- The Python route:  

For the record, but one of the above should be enough.

```bash
python -m SimpleHTTPSertver 8000

```
And open http://localhost:8000 
You eventually need to Ctr+F5 to refresh the page. [Stack](https://stackoverflow.com/questions/12193803/invoke-python-simplehttpserver-from-command-line-with-no-cache-option)

There are other options around Python, this one works for me at the moment, I'll check the other ones for reference. The link in index.html should be adapted to :8000 instead of :8080  

- Launch index.html with the VSCode's LiveServer extension.

Sure. But the rest is waaaay enough before trying this.

## Basic usage

Any mypage.md inside the md/ folder, will be available as webpage at url/?page=mypage 'url' will be different according to the choosen method. 

Point a link to that page with `[MyPage](./?page=mypage)` from within another .md file inside md/ folder.

It's just a wraper around the [zero-md](https://zerodevx.github.io/zero-md/basic-usage) parser, and serving it by any available mean.


## Later

AlpineJS is included in the index.html file, so a little interactivity for building a nav with a json object from the data/ folder ...could be nice.

Eventually testing some "components in markdown" options and see what can be done.

Building css themes to chose from. As for now it's the default <zero-md> theme, with a light prismjs for the code highlighting.



