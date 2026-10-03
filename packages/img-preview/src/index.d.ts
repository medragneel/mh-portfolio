export class ImgPreview extends HTMLElement {
  open(): void;
  close(): void;
}
export function defineImgPreview(tag?: string): void;

declare global {
  interface HTMLElementTagNameMap {
    "img-preview": ImgPreview;
  }
}
