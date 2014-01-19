---

title: Force the scrollbar back
tags: [CSS]
category: blog
layout: post

---

Since OS X Lion, the scrollbar on websites are hidden by default and only visible once you start scrolling. Personally, I prefer the hidden scrollbar, but in case you really need it, you can overwrite the default and force the scrollbar in WebKit browsers back like this:

```css
::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
}
::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0,0,0,.5);
    box-shadow: 0 0 1px rgba(255,255,255,.5);
}
```

See the [demo](http://jsfiddle.net/simurai/UsvLN/).
