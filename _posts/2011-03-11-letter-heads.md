---

title: The Letter Heads
description: Interactive shadow art
link: /projects/letter-heads/
tags: [css]
category: projects
layout: post

---

![The Letter Heads](/img/posts/letter-heads.jpg)

[The Letter-Heads](/projects/letter-heads/) is a __Firefox 4 demo__ that lets you experience interactive shadow art. Meet different characters made with letters and text-shadow. Animated with CSS3+JS. It's mainly inspired by shadow artist [Kumi Yamashita](http://www.kumiyamashita.com/light-and-shadow/). 

* __Project__: Firefox 4 Demo
* __Client__: Mozilla
* __My role__: Concept, Art direction, Illustration, Design and Code.

## Making of

Kannan is asking in the comments if the position of the letters is arranged by hand or somehow automated?

It's somewhat in between. ;-) After trying to write the CSS `transform`s by hand in a code editor, it quickly became way too tedious. Even with "live reload". So then I created a very basic editor with JS that allows each letter to be dragged around and rotated in the browser. Once I found an arrangement that somewhat looked like a face, I just copied all the inline `transform`s and added it to this [CSS file](https://github.com/simurai/simurai.github.io/blob/master/projects/letter-heads/heads.css).

If you wanna try, you can play with the [editor](/projects/letter-heads/-editor/). To rotate: [a/s] -+25deg, [z/x] -+5deg. Could've been more improved by automatically generate a JSON file and read back already finished ones, but that exceeded my JS-fuu. ;-)