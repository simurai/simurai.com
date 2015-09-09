---

title: Back to the :roots
tags: [cascade, specificity, root]
comments: yep
category: blog
layout: post

---


The cascade in CSS is a curse and blessing at the same time. It usually works quite well, but there are issues that let people get all worked up and ask the question [Do We Even Need CSS Anymore](https://css-tricks.com/the-debate-around-do-we-even-need-css-anymore/). I can somewhat relate to that - but I also think it’s not the cascade alone and also about fighting specificity. Not running into issues with specificity is hard. Almost as hard as pronouncing that word.

In this post I'll try to show a few ways how you can make the cascade be your friend and maybe reduce the need of overriding and thus encounter less fighting with specificity.


## Tip 1:

> For every CSS property that you write, try to move it up the tree as far as possible. In other words: Back to the :root.

For example, our site has a side bar and we want to add a short bio to it. The markup might look something like this:

```html
<body>
	<main class=“Posts”>
	<aside class=“SideBar”>
		<nav class=“Nav”>
		<p class=“Bio”>
```

And the CSS:

```css
.Bio {
	font-size: .8em;
	line-height: 1.5;
	color: #888;
}
```

That would work. But if we look at the Nav that is already in the SideBar, chances are good that some of the styles are the same. In our case it’s `font-size` and `color`. So let’s remove those properties from Nav and Bio and add it to the shared parent element, the SideBar.

```css
.SideBar {
	font-size: .8em;
	color: #888;
}
```

And as it turns out, that `line-height: 1.5;` is already defined for our Posts. So since it seems that the whole page uses the same line-height, let’s remove it from the Bio and Post elements and move it all up to the root node.

```css
:root {
	line-height: 1.5;
}
```

This probably sounds like common sense, but often it’s tempting to just style your new thing without even looking if some of the sibling elements define the same thing. This also happens when you copy&paste styles from another section or when pasting some snippets you found online. It might take a bit more time to refactor and seems scary, but it should keep our CSS in a healthier state.

![inline vs cascade](/img/posts/roots-1.png)

> Style the branches, not each leaf



---


## Tip 2:

> Style certain properties always as a __combo__.

A good example is the `color` and `background-color` combo. Unless you make only small tweaks, it’s probably a good idea to always change them together. When adding a background color to an element, it might not contain any text, but probably some child will. Therefore if we set foreground and background color together, we can always be sure we won’t run into any legibility  and contrast issues. Also, next time we change a background color, we don’t have to hunt for all the text colors that need to be changed too, it’s right there in the same place.

![Contrast](/img/posts/roots-2.png)

> Screenshot from [Colorable](http://jxnblk.com/colorable/demos/text/)



---


## Tip 3:

> Use “dynamic” values, such as `currentColor` and `em`s.

Sometimes it might make sense to use the text `color` for other properties. Like for `border`, `box-shadow` or for the `fill` of SVG icons. Instead of defining them directly you can use `currentColor` and it will be the same the `color` property. And since `color` inherits by default, you might can change it in only one place.

Similarly `em`s are mapped to `font-size` allowing you to scale everything by just changing the :root font size.

Here a few more details on [currentColor and EMs](http://simurai.com/blog/2014/05/04/cssconf/).

![EMs](/img/posts/cssconf-size.gif)



---



## Tip 4:

> Override UA Styles to `inherit` from its parents.

Form controls like buttons, inputs get styled by the browser in a certain way. Overriding them with `inherit` makes them adapt to your own styles.

```css
button,
input,
select,
textarea {
	color: inherit;
	font-family: inherit;
	font-style: inherit;
	font-weight: inherit;
}
```

The example above is taken from [sanitize.css](https://10up.github.io/sanitize.css/). [normalize.css](https://necolas.github.io/normalize.css/) does the same, so if you use them, you’re already covered.

You can also try to restyle other inputs like a range slider, radio, checkbox etc. And as seen above, by using `currentColor`, make them automatically match the color property. And maybe move them from a light into a dark theme without changing anything.

![root coloring](/img/posts/cssconf-color3.gif)






## Conclusion

That’s all nice stuff, but who is it for? Well, of course it can’t be forced upon every situation. I would say small and simple web sites benefit the most. But even when using a preprocessor, it might not hurt if it reduces the amount of CSS that gets output or when a few variables aren’t even needed.

Also it seems suited for the “single purpose class” approach like [Tachyons](http://tachyons.io/). It might reduce complexity and the amount of classes that are needed.

Another interesting thing could be the upcoming custom properties a.k.a. CSS variables. Unlike variables in preprocessors, when overriding a custom property, it will only affect the current selector scope. So in a sense they will be “cascading variables”. But I still have to try that out and see how it works in practice.

ps. It is possible that this post is inspired by this [tweet](https://twitter.com/kaelig/status/616902099457175552).
