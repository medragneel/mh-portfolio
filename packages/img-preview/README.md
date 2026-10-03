# img-preview-element

A tiny, dependency-free `<img-preview>` web component: the image zooms on hover and expands to fullscreen on click. Works in any framework, with an optional Astro wrapper.

## Astro

```astro
---
import ImgPreview from "img-preview-element/astro";
---
<ImgPreview src="/photo.jpg" alt="A photo" width="280px" ratio="4 / 3" radius="8px" />
```

Props: `src`, `alt`, `fullSrc`, `width`, `height`, `ratio`, `radius`, `class`.

## Any other setup

```js
import "img-preview-element/register";
```
```html
<img-preview src="photo.jpg" alt="A photo" style="width:280px;aspect-ratio:4/3"></img-preview>
```

Events: `preview-open`, `preview-close`.
