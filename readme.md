<p align="center" width="100%">
  <img width="25%" src="./img/calepin-logo.png">
</p>


Write plain Markdown and view it in your browser as styled HTML, with zero configuration. Awesome when paierd with the [sh:erpa](https://github.com/AndiKod/sherpa) CLI Assistant, to manage todos, bookmarks, notes, save to git, etc.

## Install

Clone the repo somewhere. 
```bash
cd ~/Documents
git clone git@github.com:AndiKod/calepin.git
```
You're set! 


# Basic Usage

- Any mypage.md inside the md/ folder, will be available as webpage at url/?page=mypage. The 'url' part will be different according to the choosen method. 

- Point a link to that page with `[MyPage](../?page=mypage)` from within another .md file inside md/ folder. There you go, you have a local website.

- Pages Titles are dynamically set, so it looks like a real website while only writing plain Markdown and no bundlers or whatever bloat.

It's a wraper around the [zero-md](https://zerodevx.github.io/zero-md/basic-usage) parser, and serving it by any available mean.


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




## Later

Building css themes to chose from. As for now it's the default <zero-md> theme, with a light prismjs for the code highlighting. For "bigger text" you can just zoom with ctr+ or ctr- or whatever your browser offers.

AlpineJS is included in the index.html file, so a little interactivity for building a nav with a json object from the data/ folder ...could be nice.

Eventually testing some "components in markdown" options and see what can be done.




