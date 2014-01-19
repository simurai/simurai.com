---

title: CSS tilt-shift effect
tags: [css]
category: lab
layout: post

---

This is an experiment trying to create a __Tilt-Shift__ effect on Text using __CSS__.

<p data-height="450" data-theme-id="3586" data-slug-hash="qufDa" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/simurai/pen/qufDa'>Tilt-Shift Text</a> by simurai (<a href='http://codepen.io/simurai'>@simurai</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Once again `text-shadow` was my best friend. By adding a bigger offset-y and blur-radius to the top and bottom edge, the text appears to have a lens blur that is typical for tilt-shift effects. There is also some rotate, rotateX and skewX to make the text match the perspective of the background image.

__Update__: Good news for blur fans. [CSS filters](https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/publish/Filters.html) are coming and you can add blur to any DOM element.
