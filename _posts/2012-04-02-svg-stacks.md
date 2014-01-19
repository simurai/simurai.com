---

title: SVG Stacks
tags: [SVG]
category: blog
layout: post

---

Image sprites are wildly used for downloading lots of icons or UI elements all at once with just a single HTTP-Request. But they are __somewhat cumbersome__ to use because you have to calculate the background-position offsets. You can’t easily add, remove or reorder them without recalculating. Or change the size without a neighbour peeking in from the side.

How could it be solved? Well, by __stacking__ them all on top of each other, turn off their visibility and only show the one you want. Have been wishing this would be possible for a while.. and then this happened (read from below):

![Tweets](/img/posts/svg-stacks-tweets.png)

Oh, nice! [The demo](http://jsfiddle.net/simurai/7GCGr/) already works in Firefox. That’s great news.

There are alternatives to SVG Stacks with better browser support by using [embed, iframe, object or img elements](http://jsfiddle.net/24DNn/5/), but I still prefer background images because of their easier positioning/resizing. So let’s hope more browsers will also add support for that.

So how does it work? It’s actually pretty simple. Have a look at the source of Erik’s [SVG file](http://dahlström.net/tmp/sharp-icons/svg-icon-target.svg). 

![SVG Stacks info graphic](/img/posts/svg-stacks.png)

First we give each of our icons in the SVG file a unique __ID__ and the same __class__ name, add some CSS to __hide all__ icons and only display the one that gets selected with __:target__. And now we can use a hash in the URL to pass the ID into the SVG file, like background: url(icon.svg#__ID__).

Big thanks to [@erikdahlstrom](https://twitter.com/erikdahlstrom) for that technique.

__Update__: A couple bugs have been added to other browsers so you can track its progress. Opera: “CORE-37596” (no public link). WebKit’s Bugzilla : [91790](https://bugs.webkit.org/show_bug.cgi?id=91790), [89983](https://bugs.webkit.org/show_bug.cgi?id=89983), [89985](https://bugs.webkit.org/show_bug.cgi?id=89985). And please star it in Chromium [Issue 128055](http://code.google.com/p/chromium/issues/detail?id=128055).

__Update II__: Michael Schieben created a tool to that turns a folder of SVG files into a single SVG Stack: [SVG Stacker](https://github.com/preciousforever/SVG-Stacker)

__Update III__: Looks like “SVG Stacks” got [shot down](https://code.google.com/p/chromium/issues/detail?id=128055#c6) by the WG. But there is still some [hope left](https://twitter.com/erikdahlstrom/status/308623071630200833) and it’s probably still [in flux](https://twitter.com/erikdahlstrom/status/308828047128264704). So instead of url() we could use image().
