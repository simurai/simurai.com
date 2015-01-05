---

title: Flick Scrolling
tags: [UX]
category: blog
layout: post

---

Flick Scrolling in short: An idea of a new gesture that extends scrolling content on a touch-screen. Instead of letting momentum stop the scrolling, you can decide exactly where it should stop. __It stops at the point where you flicked it__.

<div class="video-wrapper" style="padding-bottom: 56%;">
    <iframe class="video" src="//player.vimeo.com/video/49375288?title=0&amp;byline=0&amp;portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

It would be great for things like books, blogs, timelines or anywhere where you don’t skim over, but continuously wanna “move forward”. Kinda like paging but within and long scroll. Some apps have a page up/down feature, but I don’t really use it because it moves always the whole height and might cut off a picture or so. With this “flick scrolling” you can decide to where it should move to. The last paragraph or beginning of a picture.

![Flick scrolling illustration](/img/posts/flick-scroll.gif)

Why not just use pages or cards? Yes, that works sometimes, but not always, especially not when you have no control over the content. iA wrote a good post about it: [Scroll or Card?](http://ia.net/blog/ipad-scroll-or-card/) With flick-scrolling you get the joy of “card flipping” without the cards.

Here the two demos from the video so you can try it out (only tested on iOS and Android). Note that the “Timeline demo” has a __slightly modified__ behavior: Instead of scrolling to where you touched it, it always scrolls to the __top of an item__ (in this case a picture). This behavior would be great for a list of repeating items, like the timeline in Instagram for quicker and easier moving to the next picture.

[Book demo](/archive/flick-scroll/book/)

[Timeline demo](/archive/flick-scroll/timeline/)

Warning: I’m not really a programmer so the demo is just a hack to demonstrate how it could work. Would need some improvements. And of course, performance would be better if it would be implemented natively.

One thing I’m __not sure__ about.. there is the possibility that you intend to do a flick scroll but end up doing a normal scroll or vice versa. You can judge for yourself in the demos. Maybe the detection could be further optimized or here some other possibilities (Let me know if you can think of more).

* Use a two-finger scroll. But then you can’t use just your thumb which makes it not that useful.
* Split up the screen into two areas, for example left for normal scroll and right for flick-scroll.

__Credits__: Demos use the [iScroll4](http://cubiq.org/iscroll-4) library and in the timeline demo, the “scrollToElement” feature is used, which is a pretty cool one.


## Update
Ahmed El Gabri [pointed out](https://twitter.com/ahmedelgabri/status/247112692157009921) that Readability already has a feature like that. Using a __double-tap__ on a “split screen” to determine up or down scroll. It also adds an arrow on the side to guide the eye, which is really helpful.

Some points about using double-tap vs a flick gesture:

* Doesn’t work in a web browser, double-tap is already used for “zoom to element”.
* Can only be performed on half of the screen.
* Maybe takes a bit longer.
* Double-tap is already used by some apps for other functions. This would make it harder to use in general and you always have to remember which app supports it for what.
* Harder to discover. It’s much more likely that you do a “flick-scroll” by accident and learn about it quicker.

But of course the “harder to discover” of double-tap scrolling could also be a __good thing__. It would be far less risky or confusing, because it doesn’t conflict with the scroll behavior currently in use. Also, double-tap scrolling in web browsers could be used as soon as [viewport scaling is disabled](http://stackoverflow.com/questions/4389932/how-do-you-disable-viewport-zooming-on-mobile-safari).

Hmm.. haven’t made up my mind yet.. but either way, would love to see more explorations that go beyond momentum scrolling.


## Update II
[Kurt](https://twitter.com/damenleeturks/status/246261588611461120) and [David](https://twitter.com/desandro/status/248095894828883968) were concerned that if you would want to quickly scroll through a long page, you would end up doing short flicks that would conflict with the flick-scroll gesture. And yes, they are right. That’s indeed problematic.

A solution I could see is this: The flick-scroll gesture only works when the page is __not moving__. So if you first would do a longer scroll movement that uses momentum, then you could scroll however you like (also short movements) until scrolling comes to a halt. Only then you could do either again.


## Upate III (Feb 2014)

Recently [Readability](https://readability.com/) updated their iOS apps. Overall I like the changes, but they got rid of the [double tap](https://vimeo.com/45460682) feature that moved the page where you tapped it. And even though I really liked that feature I can see why it doesn't work that well.

The problem is not the feature itself, it's that I got so used to double tapping that I sometimes did it outside of Readability, like on a web site or another app which of course didn't work. The thing with all custom gestures is that even if your muscle memory learned them, you still have to think first if the current app supports it or try and get frustrated if it doesn't.

I guess that's why something like the above "Flick scrolling" would only work if it's baked into the OS and available system wide.

Rene makes a good point:

<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p><a href="https://twitter.com/simurai">@simurai</a> but by that argument Pull to Refresh should have been taken out of Tweetie?</p>&mdash; Rene Ruiz (@okayrene) <a href="https://twitter.com/okayrene/statuses/430134841603268608">February 3, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Hmm.. true. I think in the case of "Pull to Refresh". That new custom gesture was just __so good__, that quickly a lot of other apps copied it. Then when it got to the point where it had the critical mass, Apple almost had no choice as to also add it to iOS and their own apps and it became the "standard way" of manually refreshing content.

It's just very tough for custom gestures to get that needed wide adoption to make it. Kinda a chicken-egg thing. Or on the other hand.. only the very best, almost obvious ones will ever make it, which could also be a good thing.


## Update IV (Jan 2015)

Mathew Huusko made an iOS version. Source is on [GitHub](https://github.com/mhuusko5/Flick-Scroll)
