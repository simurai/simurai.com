---

title: We’re in an icon-sharpness limbo
tags: [icons, icon font, SVG, PNG]
category: blog
layout: post

---

With the rise of Retina displays people are looking for resolution independent alternatives to PNG icons. Some fell in love with font-icons, some are shouting “SVG”. But I’m sorry, if you’re looking for a silver bullet, I’m afraid it doesn’t exist. Let’s take a closer look at our options:

### Icon fonts

are awesome, but.. 

they are not sharp. I mean really sharp, pixel-perfect kind of sharp. Using font-face for icons has become quite popular. I have been promoting and even started [collecting](http://www.delicious.com/stacks/view/SC3hpq) them. But there is a flaw that keeps bugging me. They are still a tiny bit blurry on “non Retina” displays (which are still a huge majority). Try out the [size slider in Chris’s demo](http://css-tricks.com/examples/IconFont/) and take a very close look. It varies at different sizes, but they all have this __"half-pixel blurriness"__ problem. It might be hard to notice, so here a zoomed-in screenshot at 15px (also removed the background noise):

![Blurry icons](/img/posts/icon-sharpness-1.png)

The subpixel anti-aliasing works great on curves, but not on straight lines, there it just doesn’t look sharp. In theory you could use [font hinting](http://en.wikipedia.org/wiki/Font_hinting) to snap the icons to whole pixels. But so far I’m not aware of any icon-set doing that. Also I’m guessing it’s a lot more work and the hinting data might increase the file size significantly. __Edit__: [@thijs notes](https://twitter.com/#!/thijs/status/183945113507074048) that hinting only works on supported platforms and won’t help on OS X, iOS and Android.


### SVG to the rescue?

Well, not really. The big advantage of using SVG icons would be that in their original size (not resized), they look pixel-perfect sharp. But once you start resizing, they have the same subpixel blur problem until you reach __multiple__ of its __original size__. Notice the inner cross.

![Icon sizes](/img/posts/icon-sharpness-2.png)

In practice using only multiple sizes probably should be ok. You create all your icons in a base size, let’s say 16px and you use a bigger version for action buttons in 32px or 48px.

__Edit__: [@erikdahlstrom](https://twitter.com/erikdahlstrom/status/184242648700301312) + [@Marco_Rosella](https://twitter.com/marco_rosella/status/183969428604583937) mentioned: `shape-rendering:crispEdges`. If used on individual rect(angles), they can be forced to pixel-snapping. Might not always be perfect, but keeps it crisp. Test in this [jsFidde](http://jsfiddle.net/simurai/dQbvD/12/).

Problem solved? I wish, but there are other issues like:

* There is not a lot of good SVG icon sets available.
* Lack of SVG sprite creation tools.
* Can’t change the color with CSS. [It is possible](http://jsfiddle.net/simurai/QYr4z/55/), but only when used with inline SVG and I don’t feel happy adding big SVG chunks to the markup.
* No effects.. like drop shadows. (SVG has filters, but again.. you can’t easily change them in CSS).
* And the biggest bummer of all.. bad browser support in Firefox and Opera when an SVG is used as a `background-image`. It appears that the SVG actually gets converted into a bitmap and when resized with background-size, it doesn’t get redrawn, just scaled up, which makes it look really blurry. This kinda defeats the purpose of using a __S__calable __V__ector __G__raphic.

![SVG issues](/img/posts/icon-sharpness-3.png)

Here a [fiddle to test it out](http://jsfiddle.net/simurai/dQbvD/).

You could use inline SVG or SVG as an `<img>` element, but that makes it hard to be used as a sprite. Maybe with nested elements and overflow:hidden? Anyways.. just not as straight forward and flexible as with background-image.

__Edit__: David Bushell found a [workaround](http://dbushell.com/2012/03/11/svg-all-fun-and-games/) by starting large and only scale down.

### PNGs

Lots of icon fonts also come with a PNG version that you could use instead, but then you need a solution for showing a HiRes version on Retina displays. Using a __device-pixel-ratio__ Media-Query should help you out. Or Apple just implemented [-webkit-image-set](http://trac.webkit.org/changeset/111637), which looks promising, but still is gonna take a while.

So what should you do? As I said.. there is no silver bullet, but..


### Guide

Here a little guide that might help.

1. When starting a new project, during prototyping and development, use font icons. Nothing beats the freedom of quickly and easily swap icons, change colors, try out text-shadow and other effects.
2. Then at some point you have to decide if it’s worth the trouble that comes when using SVG icons or PNGs. It’s a tough call and in the end it all depends on your requirements and priorities. It almost needs a flow-chart. ;-) You’ve to be ok with all their limitations described above. See if the available budget allows for the extra work, count how many icons there are in total and if you need them in different sizes or not.

There’s just no single image format suitable for everything and probably never will be. So who says you can’t __mix them all together__? Maybe best is to use PNG served in many different sizes for your high fidelity, multi-color logo and other graphics. SVG icons for your navigation that stays the same size, but also look sharp on Retina displays. Responsive inline SVG for bars and charts and an icon font for all your different button sizes. We’ve mostly been doing that anyways.


### A look into the future

Is there a way to get out of this icon-sharpness limbo? Well.. let’s just wait a little.. once we have Retina displays everywhere (ok, could take a couple years), the subpixel problem will be gone and maybe browsers will have fixed the SVG issues and we can truly celebrate our resolution independent icons? But even then, we still would’ve to deal with the problem that [details in icons don’t scale](http://www.pushing-pixels.org/2011/11/04/about-those-vector-icons.html). __Update__: [Media Queries in SVG](http://my.opera.com/ODIN/blog/2009/10/12/how-media-queries-allow-you-to-optimize-svg-icons-for-several-sizes) might solve that.
