---

title: Vertical flex:1 with overflow scrolling
tags: [tips, flexbox]
category: blog
layout: post

---

I started to use the new __Flexbox__ syntax in a couple places and often needed something to be vertically flexible, but when content starts to overflow, it should add a scrollbar.

First I tried it like this:

```css
flex: 1;
overflow: auto;
```

but somehow it didn't work. Just when adding __min-height:0__ it worked.

```css
flex: 1;
overflow: auto;
min-height: 0;
```

Not sure if that's the intended behavior or a bug. Anyways, happy there is a simple fix for it. You can test it in this [demo](http://codepen.io/simurai/pen/dvklJ).
