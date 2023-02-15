<p align="center" width="100%">
  <img width="25%" src="./src/assets/img/calepin-logo.png">
</p>

Bash & Pandoc based Static Site Generator. 

To be used alone, or with [sh:erpa](https://github.com/AndiKod/sherpa) CLI Assistant, along with notes management, todos, bookmarks, web search from the console, etc.

## Install 

Clone the repo somewhere. 
```bash
cd ~/Documents
git clone git@github.com:AndiKod/calepin.git
```
Add that folder to the path by adding that line to *~/.bashrc* : 

```bash
export PATH=$PATH:$HOME/Documents/calepin/bin
```
Restart your terminal or enter the `source ~/.bashrc` command. Edit the paths inside bin/comp and bin/deploy to match your calepin folder.

**Congtratz!** Now you can just run `comp` to generate a full website inside /dist from the content in /src. From inside Vim, just use `:!comp` and keep editing.

- Add it's path also as a [sh:erpa](https://github.com/AndiKod/sherpa) route, to fully integrate it and get to all the productivity and quality-of-life tools. 

# Basic Usage

Via just Pandoc, Calepin include:

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

```bash
wget https://github.com/jgm/pandoc/releases/download/2.9.2.1/pandoc-2.9.2.1-1-amd64.deb
sudo dpkg -i pandoc-2.9.2.1-1-amd64.deb
```

When installing from your distro library, it sometimes install old versions. Check that [stackoverflow](https://stackoverflow.com/questions/61100045/how-to-install-stable-and-fresh-pandoc-on-ubuntu) post about that point.


> It's just a beginning, so for now `src/index.md` will compile to `dist/index.html`, and `src/somepage.md` will compile to `dist/somepage/index.html` to have clean urls like https://mysite.com and https://mysite.com/somepage.


## Compile & Deploy to Vercel

- `comp` to Compile layouts, assets & md to /dist 
- `deploy` to run `vercel --prod` from dist  

All commands can be used from inside Vim, preceded by `:!`

*PS: vercel must be runned once prior to that, from the /dist folder to setup the link before just edit `bin/deploy` and fire `deploy` to go live whenever needed.*

### Integrate with sh:erpa to get Git commands, and more

- `s sync` or `s toGit "message txt"` to save/push
- `s fromGit` to pull the most recent version  
- `s --help` for docs and commands lists


TODO: Looking into custom routes and folder-based content routing


## One line ...DevServer


On Linux or Windows WSL, go inside & launch the Server:

```bash
cd ~/Documents/calepin/dist
npx http-server 
```

On the first call it will install it. Your Calepin website is running at http://localhost:8080



### The good old [XAMPP](https://www.apachefriends.org/index.html) or [WAMP](https://www.wampserver.com/en/) 

As an alternative, If you have something like that still installed, clone the repo in the specific root, or download and drop it there. 

```
# Just open it in a browser
firefox http://localhost/calepin/dist
```

### The Python route  

For the record, but one of the above should be enough.

```bash
python -m SimpleHTTPSertver 8080

```
You eventually need to Ctr+F5 to refresh the page. [StackOverflow](https://stackoverflow.com/questions/12193803/invoke-python-simplehttpserver-from-command-line-with-no-cache-option). There are other options around Python (if you run v2 or v3), this one worked for me when testing.

---

To be continued ;)

Calepin & Sh:erpa are tools under active developpement, stick around to see where it goes. A YouTube #devLog serie is planned to talk about the journey.

Andrei
