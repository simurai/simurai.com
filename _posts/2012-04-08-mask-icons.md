---

title: AnIcons
description: Animated CSS Mask Icons
link: http://codepen.io/simurai/pen/gGAjr
img: mask-icons.jpg
tags: [CSS, animation, mask, SVG]
category: lab
layout: post

---

Small demo of __animated CSS Mask Icons__. Note: It uses the __non-standard__ CSS masks that are only implemented in WebKit without a spec. I don’t wanna go into discussing if that’s ok or not, instead I just like to experiment with them because I think you can do cool stuff and hopefully one day it will become standard. __Update__: Happy that there is now a [CSS Masking Spec](http://dvcs.w3.org/hg/FXTF/raw-file/tip/masking/index.html).

<p data-height="250" data-theme-id="3586" data-slug-hash="gGAjr" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/simurai/pen/gGAjr'>Animated icons</a> by simurai (<a href='http://codepen.io/simurai'>@simurai</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Using CSS masks for icons would have the benefit of being able to create a large icon-set and easily swap textures, colors, shadow effects. And also animate them. Basically everything you can do with CSS backgrounds. It could also be used for other stuff like tooltips, speech bubbles, funky shaped buttons and so on.

The basics of this demo goes something like this:

1. Add a __texture__ and __gradients__ to your element’s background.
2. Use SVG (or PNG) as __mask-image__ to “cut out” the rectangle into the desired shape.
3. Use a second shape together with [mask-composite](https://developer.mozilla.org/en/CSS/-webkit-mask-composite) to either __add__ (source-over -> robot), __subtract__ (source-out -> apple bite, cloud arrow) or __intersect__ (xor -> cloud arrow while pressing) with the first mask.
4. Add some transitions/animations to the `mask-position`.

So ya, basically you can __mask a mask__, combine multiple masks or even do the opposite depending if they overlap or not. In total there are a dozen mask-composite options that I’m not quite sure what the exact difference is. I just tried them all till it worked like I wanted. ;-)

Couple notes:

* __Pseudo elements__ (highlight on the cloud) also gets masked.
* __CSS filters__ (Chrome Canary, WebKit nightly) work great with CSS masks, unlike box-shadows. See how the drop-shadow follows the contures of the SVG shape.
* For better cross-browser support you could just animate multiple backgrounds (background-composite works too), but then you loose the ability to use a seamless texture.
* I’m pretty sure, you could do all the effects with SVG alone. It has masks, drop-shadows, animation.. I just haven’t really dugg myself deep enough into them.
* Since it uses mask-position to animate the masks, you can’t rotate them, which is a little limiting.