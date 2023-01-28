# sh:erpa-Notes

Write plain Markdown and view it in your browser as styled HTML, with zero configuration. Awesome when paierd with the [sh:erpa](https://github.com/AndiKod/sherpa) CLI companion, to manage todos, bookmarks, notes, save to git, etc.

## Install

Clone the repo and name it as you like. You're set.

## View in the Browser

There are at least threee ways to do that:

- If you have something like XAMPP installed, drop the folder in the corresponding root. You know the dril.

- From inside the folder go:

```bash
	python -m SimpleHTTPSertver 8000

```
And open http://localhost:8000 
You eventually need to Ctr+F5 to refresh the page. [Stack](https://stackoverflow.com/questions/12193803/invoke-python-simplehttpserver-from-command-line-with-no-cache-option)

- Launch index.html with the VSCode's LiveServer extension.


## Basic usage

Any mypage.md inside the md/ folder, will be available as webpage at http://localhost:8000/?page=mypage 

Point a link to that page with [MyPage](./?page=mypage) from within another .md inside md/

It's just a wraper around the [<zero-md>](https://zerodevx.github.io/zero-md/basic-usage) parser, and serving it by any available mean.


## Later

AlpineJS is included in the index.html file, so a little interactivity for building a nav with a json object from the data/ folder ...could be nice.

Eventually testing some "components in markdown" options and see what can be done.

Building css themes to chose from. As for now it's the default <zero-md> theme, with a light prismjs for the code highlighting.



