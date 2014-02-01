---

title: Zeppelin
description: Glass text effect
link: http://codepen.io/simurai/pen/Dhskl
img: zeppelin.jpg
tags: [css]
category: lab
layout: post

---

In this experiment I tried to create a __glass text effect__ (refractive index) with __CSS__.

<p data-height="455" data-theme-id="3586" data-slug-hash="Dhskl" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/simurai/pen/Dhskl'>Zeppelin</a> by simurai (<a href='http://codepen.io/simurai'>@simurai</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

The __refractive index__ effect is achieved by using two background images on top of each other. The underlying one get’s scaled down a bit and the top one get’s cutout by the text using `-webkit-background-clip: text`. For the __embossing__ effect a `-webkit-text-stroke` with a low opacity is used.

Something to keep in mind, animating clippings, text-shadows, transparency can make your CPU spike. So the animation is not looped, only on hover.

This experiment is inspired by [Trent Walton’s example](http://trentwalton.com/bgclip/).
