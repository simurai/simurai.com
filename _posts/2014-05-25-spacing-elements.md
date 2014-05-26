---

title: Spacing elements
tags: [css, margin, padding, REM]
category: blog
layout: post

---

So let's say we have a "bar" with some items inside. Like a header or footer. Let's also say we want those items to be spaced evenly, meaning they have the same gab everywhere. Shouldn't be a big problem. Let's take a look:

## 1. Margin
We can't just add `margin: 2rem` to the elements since there is no [margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/margin_collapsing) on the horizontal axis. And it also doesn't work when using Flexbox. Leaving a double sized gap in between. Wishing there is something like `margin: 2rem collapse;` where you can enable/disable it optionally.

<p data-height="151" data-theme-id="3586" data-slug-hash="fywxI" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/simurai/pen/fywxI/'>Spacing elements (no collapsing)</a> by simurai (<a href='http://codepen.io/simurai'>@simurai</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>



## 2. Pseudo classes
Using `margin: 2rem 0 2rem 2rem` and then a pseudo class like `:last-child { margin-right: 2rem }` to add the extra margin works as long as you don't need to hide that element with `display: none`. Maybe a rare case, but I've been running into this issue once in a while. Would be cool if there is something like `:last-displayed` that would ignore elements that have display:none.

<p data-height="151" data-theme-id="3586" data-slug-hash="cbqmK" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/simurai/pen/cbqmK/'>Spacing elements (pseudo)</a> by simurai (<a href='http://codepen.io/simurai'>@simurai</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

## 3. Margin + padding (best)
The easiest way I think, is to add margins to all elements (like in the first example), but then also add the __same value__ as `padding` to the parent element. Like this:

```css
.Header {
  padding: 1rem;
}
.Header-item {
  margin: 1rem;
}
```

That way all elements are evenly spaced and you still can use `display:none` without having to worry about breaking it. A little flaw is that you have to keep the 2 values in sync, but if you're using a preprocessor, it can just be a single variable. Or maybe you could use REM's to control it with `font-size` from the :root.

<p data-height="151" data-theme-id="3586" data-slug-hash="xsotr" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/simurai/pen/xsotr/'>Spacing elements</a> by simurai (<a href='http://codepen.io/simurai'>@simurai</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>


### Other?
There are more ways but I'm not aware of a simple one that also let's you use `display: none`. Let me know otherwise.

* Maybe the [Visual Format Language](http://gridstylesheets.org/guides/vfl/) in __GSS__? Looks quite slick.
