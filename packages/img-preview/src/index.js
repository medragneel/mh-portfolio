import { ImgPreview } from "./img-preview.js";

export { ImgPreview };

/** Register the element (no-op on the server or if already registered). */
export function defineImgPreview(tag = "img-preview") {
  if (typeof customElements !== "undefined" && !customElements.get(tag)) {
    customElements.define(tag, ImgPreview);
  }
}
