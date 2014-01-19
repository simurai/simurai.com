---

title: Flick Scrolling
tags: [UX]
category: blog
layout: post

---

Flick Scrolling in short: An idea of a new gesture that extends scrolling content on a touch-screen. Instead of letting momentum stop the scrolling, you can decide exactly where it should stop. __It stops at the point where you flicked it__.

<iframe src="//player.vimeo.com/video/49375288?title=0&amp;byline=0&amp;portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

It would be great for things like books, blogs, timelines or anywhere where you don’t skim over, but continuously wanna “move forward”. Kinda like paging but within and long scroll. Some apps have a page up/down feature, but I don’t really use it because it moves always the whole height and might cut off a picture or so. With this “flick scrolling” you can decide to where it should move to. The last paragraph or beginning of a picture.

![Flick scrolling illustration](/img/posts/flick-scroll.gif)

Why not just use pages or cards? Yes, that works sometimes, but not always, especially not when you have no control over the content. iA wrote a good post about it: [Scroll or Card?](http://informationarchitects.net/blog/ipad-scroll-or-card/) With flick-scrolling you get the joy of “card flipping” without the cards.

Here the two demos from the video so you can try it out (only tested on iOS and Android). Note that the “Timeline demo” has a __slightly modified__ behavior: Instead of scrolling to where you touched it, it always scrolls to the __top of an item__ (in this case a picture). This behavior would be great for a list of repeating items, like the timeline in Instagram for quicker and easier moving to the next picture.

[Book demo](http://archive.simurai.com/lab/flick-scroll/book/)

[Timeline demo](http://archive.simurai.com/lab/flick-scroll/timeline/)

Warning: I’m not really a programmer so the demo is just a hack to demonstrate how it could work. Would need some improvements. And of course, performance would be better if it would be implemented natively.

One thing I’m __not sure__ about.. there is the possibility that you intend to do a flick scroll but end up doing a normal scroll or vice versa. You can judge for yourself in the demos. Maybe the detection could be further optimized or here some other possibilities (Let me know if you can think of more).

* Use a two-finger scroll. But then you can’t use just your thumb which makes it not that useful.
* Split up the screen into two areas, for example left for normal scroll and right for flick-scroll.

__Credits__: Demos use the [iScroll4](http://cubiq.org/iscroll-4) library and in the timeline demo, the “scrollToElement” feature is used, which is a pretty cool one.


## Update
Ahmed El Gabri [pointed out](https://twitter.com/ahmedelgabri/status/247112692157009921) that Readability already has a feature like that. Using a __double-tab__ on a “split screen” to determine up or down scroll. It also adds an arrow on the side to guide the eye, which is really helpful.

Some points about using double-tab vs a flick gesture:

* Doesn’t work in a web browser, double-tab is already used for “zoom to element”.
* Can only be performed on half of the screen.
* Maybe takes a bit longer.
* Double-tab is already used by some apps for other functions. This would make it harder to use in general and you always have to remember which app supports it for what.
* Harder to discover. It’s much more likely that you do a “flick-scroll” by accident and learn about it quicker.

But of course the “harder to discover” of double-tab scrolling could also be a __good thing__. It would be far less risky or confusing, because it doesn’t conflict with the scroll behavior currently in use. Also, double-tab scrolling in web browsers could be used as soon as [viewport scaling is disabled](http://stackoverflow.com/questions/4389932/how-do-you-disable-viewport-zooming-on-mobile-safari).

Hmm.. haven’t made up my mind yet.. but either way, would love to see more explorations that go beyond momentum scrolling.


## Update II
[Kurt](https://twitter.com/damenleeturks/status/246261588611461120) and [David](https://twitter.com/desandro/status/248095894828883968) were concerned that if you would want to quickly scroll through a long page, you would end up doing short flicks that would conflict with the flick-scroll gesture. And yes, they are right. That’s indeed problematic.

A solution I could see is this: The flick-scroll gesture only works when the page is __not moving__. So if you first would do a longer scroll movement that uses momentum, then you could scroll however you like (also short movements) until scrolling comes to a halt. Only then you could do either again.
