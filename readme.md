<p align="center" width="100%">
  <img width="25%" src="./src/assets/img/calepin-logo.png">
</p>

Shell & Pandoc simple Static Site Generator. 

Can be used alone, but Awesome with [sh:erpa](https://github.com/AndiKod/sherpa) CLI Assistant, along with notes management, todos, bookmarks, web search from the console, etc.

## Install 

Clone the repo somewhere 

```bash
git clone https://github.com/AndiKod/calepin.git  
```
Make sure pandoc , sass, purgeCSS & entr are installed. On something like Ubuntu 22 (full or inside WSL), Debien, & those based upon them you can just go:

```bash
npm i -g sass purgecss 
sudo apt-get install pandoc
sudo apt-get install entr 
```

*If you are rolling something like Gentoo or Arch, I bet you know how to get those packages.*

- Edit the path to your root folder inside `bin/compil` and `bin/build`. That's all. For next times, clonning the Calepin and edit the path will be enough.

## Basic Usage

Available commands from inside the `bin/` folder:

### `watch`

Build sass, compile templates & md, copy assets and palce everything in the `dist` folder, so that we could serve it from there. Unused css are removed. Run again when files are changed inside `src/` folder.

### `serve`

Launch `npx http-server` or install it on the first run. Your Calepin from `dist/` is availble at http://localhost:8080  

### `build` 

Compile everyting to `dist/`  like `watch` but with css in compressed mode.

### `deploy`

Run Vercel once from dist/ to establish the link, then just `deploy`the next times.



## Pandoc sweet tools:

- frontmatter data
- layouts
- partial-layouts 
- conditionals & loops in layouts
- code highlight out of the box
- math formulas
- styled divs generated from markdown
- attributes & class/id applied from within markdown
- auto en-dash and em-dash, md to visual checkbox todo, ...

Check the docs about the [Templates](https://pandoc.org/MANUAL.html#templates) and [Pandoc's Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown) on pandoc.org, and obviously get the latest version.

For now `src/index.md` will compile to `dist/index.html`, and `src/somepage.md` will compile to `dist/somepage/index.html` to have clean urls like https://mysite.com and https://mysite.com/somepage.


### Integrate with [sh:erpa](https://github.com/AndiKod/sherpa) to get Git commands, edit md files, todos, search the web...

- `s toGit` :save/push to the remote, with default or custom msg
- `s fromGit` :pull in the most recent version  
- `s sync` :either push changes, or pull (just in case) 
- `s --help` for docs and commands lists, in english or français



TODO: Looking into 'content collections' like posts or whatever.


---


#### The good old [XAMPP](https://www.apachefriends.org/index.html) or [WAMP](https://www.wampserver.com/en/) 

As an alternative, If you have something like that still installed, clone the repo in the specific root, or download and drop it there. 

```
# Just open it in a browser
firefox http://localhost/calepin/dist
```

#### The Python http server  

For the record, but one of the other methods should be enough.  

```bash
python -m SimpleHTTPSertver 8080

```
You eventually need to Ctr+F5 to refresh the page. [StackOverflow](https://stackoverflow.com/questions/12193803/invoke-python-simplehttpserver-from-command-line-with-no-cache-option). There are other options around Python (if you run v2 or v3), this one worked for me when testing.

---

To be continued ;)

Calepin & Sh:erpa are tools under active developpement, stick around to see where it goes. A YouTube #devLog serie is planned to talk about the journey.

Andrei
