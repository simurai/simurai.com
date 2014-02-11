---

title: Sprite sheet animation with steps()
tags: [tips, animation]
category: blog
layout: post

---


If you don't wanna use gifs on your site and rather PNGs for better colors, but still be able to __animate__ them, here an option:

CSS keyframe animations have a property called [animation-timing-function](https://developer.mozilla.org/en-US/docs/CSS/animation-timing-function) and one of the options is to use the __steps()__ feature like in this example:

```css
div {
    animation: play 1s steps(10) infinite;
}

@keyframes play { 
      0% { background-position:    0px 0; } 
    100% { background-position: -500px 0; }
}
```

The difference to the other easing options is that instead of continuously moving from 0px to -500px, it __jumps in steps__ with pauses in between. This is perfect for animations using a sprite sheet. In the above example it's steps of 50px with a pause of 100ms (10 steps in total).

Here a little demo.

<p data-height="300" data-theme-id="3586" data-slug-hash="tukwj" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/simurai/pen/tukwj'>Steps Animation</a> by simurai (<a href='http://codepen.io/simurai'>@simurai</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

As you can see, you can change the __speed__ how fast the animation should play, which is pretty cool, the only problem is that it always starts from the beginning and makes it look jumpy. I also tried to animate the animation-duration by using inherit from a parent element, but unfortunately that is not supported. So I guess if you wanna have a more dynamic speed (animating the animation), you still need to use JS for that.

ps. Here an example found in the wild: The logo of [Impending](http://impending.com/). It could also be used for HTML5 games. Here a [Street Fighter II demo](http://codepen.io/jkneb/full/smtHA) and [post](http://front-back.com/animate-png-sprites-with-css3-animations).
