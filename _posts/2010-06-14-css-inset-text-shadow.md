---

title: Carve Me
description: CSS inset text-shadow
link: http://codepen.io/simurai/pen/Atnmy
img: inset-text-shadow.jpg
tags: [css]
category: lab
layout: post

---

Unfortunately, there is no __inset text-shadow__. But you can kinda simulate it.

<p data-height="268" data-theme-id="3586" data-slug-hash="Atnmy" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/simurai/pen/Atnmy'>Carve Me</a> by simurai (<a href='http://codepen.io/simurai'>@simurai</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

(hover to see the effect)

```css
.inset {
    color: transparent;
    background-color: rgba(82,96,117,0.5);
    -webkit-background-clip: text;
    text-shadow: rgba(255,255,255,0.5) 0 5px 6px;
}
```

1. First we set the text __color__ to transparent.
2. Then we add a dark __background-color__.
3. Then by adding __background-clip: text__ it only shows the background within the outline of the text. It’s like a mask. Note, this is not a standard feature and only implemented in Chrome/Safari.
4. And finally, if we add a bright, half transparent __text-shadow__ on top and push it down a bit so that the dark background can be seen, it makes it look like the text is carved into the surface.

Note that it doesn’t work well on all backgrounds and you might have to adjust the colors. Also, it’s not easy to add a fallback, so make sure you use Modernizr.
