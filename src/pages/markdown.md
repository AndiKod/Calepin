---
title: Markdown Test
desc: Happy markdown
date: February 12, 2023  
---

# Pandoc Markdown

This page is here to check the styles. Baseball Ipsum. A text generator straight out of left field, step up to bat on your next project with this baseball themed lorem ipsum text.

Full official docs: [Pandoc's Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown)  

## Yaml Frontmatter

Meta data can be passed to the layout with things like:

~~~yaml 

---
title: Markdown test
desc: Happy markdown
date: February 12, 2023
---

~~~

## H2 tiltle with a .foo class {.foo}

It's done with:  `## Title {.foo}`


### Visual todo

Things like: `- [ ] text` turn into

- [ ] an unchecked task list item
- [x] checked item


### Emoji

Things like `:smile:` are converted to :smile:

- Blue :smile: 
- ~~Strike trough things~~
- [Banana]{.underline}


### Generating styled divs:

```markdown

::: {#special .sidebar}
This is a div tag, with id and class.
:::
```

::: {#special .sidebar}
This is a div tag, with id and class.
:::


### Themable css highlight code  

```javascript
if(false){
	console.log('something')
}
```

<div style="display:flex;justify-content:center;">
Some **bold** and *italic* text or [links](#)
</div>


### n or m dash, geherated from `--` or `---`

I :heart: Pandoc. It's---so pleasantly---awesome.


### Math formulas

`$$V_{sphere} = \frac{4}{3}\pi r^3$$` will print:

$$V_{sphere} = \frac{4}{3}\pi r^3$$

