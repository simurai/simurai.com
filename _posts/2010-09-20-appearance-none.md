---

title: umbrUI
description: appearance:none styling
link: http://simurai.github.io/umbrUI/
tags: [css]
category: projects
layout: post

---

![umbrUI](/img/posts/umbrui.jpg)

__umbrUI__ is a demo of HTML `<input>` elements styled with __CSS__. There are: No images, no extra markup and no JavaScript.

If you use `appearance: none`, it will remove the default styles and you’re free to add your own.

```css
input[type="checkbox"] {
    -webkit-appearance:none; /* Remove default styles */
    /* Add your own styles */
}
```

So I used as many of the `:before` and `:after` __pseudo elements__ as possible and well as the __Shadow DOM__ elements. 

__Browser support__: WebKit for now.

__Credits__: The Rocker switch (checkbox) is based on Mike Bernardo’s [original design](http://drbl.in/55489).

See the [demo](http://simurai.github.io/umbrUI/) (Safari or Chrome).
