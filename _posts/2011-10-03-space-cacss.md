---

title: Space CaCSS
description: Animated CSS background patterns
link: http://codepen.io/simurai/pen/kgsce
img: space-cacss.jpg
tags: [animation, background]
category: lab
layout: post

---

Space CaCSS are animated CSS3 background patterns. The challenge was to create some trippy effects with just a single `<div>` element and no extra markup.


<p data-height="750" data-theme-id="3586" data-slug-hash="kgsce" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/simurai/pen/kgsce'>Space CaCSS</a> by simurai (<a href='http://codepen.io/simurai'>@simurai</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>


How does it work? The basic technique is to use a CSS3 `repeating-radial-gradient` as a background and animate it by changing its `background-size`. That’s all what’s needed in the second example. Pretty hypnotic. If you want more variations you can use a second gradient with a different background-size. Or add a second animation for the `background-position` with a different timing. That makes it possible to create a somewhat random looking motion like in the last example (orange).

You could also add some extra markup and use transforms like rotate, scale or so to make even more trippy effects, but for now I just kept it to background-size and position.

Something to __keep in mind__: Animating the whole background of a page is not that great of an idea. First it would be waaaay too distracting, then CPU usage is quite high especially if it’s a large area and using Canvas would probably be a better option. Also it doesn’t work in all browsers. But considering how little code is needed (most is just vendor prefixes) to create those animated patterns, it’s super fun to play with.
