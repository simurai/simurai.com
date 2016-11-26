---

title: Media Query splitting
tags: [CSS, RWD]
category: blog
layout: post

---

When Media Queries got introduced and people started out with Responsive Web Design, I used to overwrite my Desktop styles to make it fit on Mobile. Later I shifted to "Mobile first" where you start out with the Mobile styles and overwrite them for Desktop sizes. But on a recent project I've started using a different approach by __splitting__ the styles instead of __overwriting__ them. It goes something like this:

Here a "Mobile first" example:

```css
.box {
  background: #777;
  width: 100%;
  box-shadow: inset 0 1px 3px #333;
}

@media (min-width: 800px) {
  .box{
    width: 760px;
    margin: 20px auto;
    box-shadow: none; /* reset */
  }
}
```

And here MQ splitting.

```css
.box {
  background: #777;
}

@media (max-width: 799px) {
  .box {
    width: 100%;
    box-shadow: inset 0 1px 3px #333;
  }
}

@media (min-width: 800px) {
  .box{
    width: 760px;
    margin: 20px auto;
  }
}
```

So the idea is to keep a default CSS block with all the __shared__ properties and for the rest __split them up__ into __different__ Media Queries. For example `max 799px` and `min 800px`, so it's always either or.

Yes, there are now 3 CSS blocks instead of just two, but I find it much easier to have this mental model. When adding, removing or changing CSS properties, you don't have to be worried of messing up. They are now more clearly __separated__ and __sandboxed__. In some cases it could also lead to less code overall because you don't have to reset a lot of stuff that is not used in the other Media Query.

You could still start out with a "single version". It can be mobile __OR__ desktop, whatever you prefer to do first. If it's desktop, the example above would look like this:

```css
.box {
  background: #777;
  width: 760px;
  margin: 20px auto;
}
```

Then, when it's time to split up, just start moving your properties that are different into each Media Query.

The only "clean up" or "refactoring" you have to do after lots of changes in that split mode -> check if there are properties that __became the same__ again and could be moved back to the shared (default) block.

I'm not quite sure yet if I will move to splitting MQ like this on all new projects. It was more an accident than intentional, but thinking about it some more, I quite like this way and am gonna try it out on some more projects.


## Update

One drawback, as pointed out by [Francisc Romano](https://twitter.com/franciscromano/status/240808834250190850): It doesn't work well for browsers that don't [support MQs](http://caniuse.com/#feat=css-mediaqueries) because the default styles don't get applied. So for IE8 and below a __conditional stylesheet__ could be used. You might need one anyways. Or you could add just some really minimum styles to the shared block as a backup.

Also, you don't have to use MQ splitting on every single selector. I might makes sense to only use it on selectors where the difference between mobile/desktop is high. In case you like to separate everything, you could create __3 different files__ and use MQs in the `<link>` or use a build process so you don't even have to download the unused styles.
