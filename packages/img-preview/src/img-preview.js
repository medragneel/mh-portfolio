// Safe to import during SSR: HTMLElement doesn't exist on the server.
const Base = typeof HTMLElement !== "undefined" ? HTMLElement : class {};

export class ImgPreview extends Base {
  static get observedAttributes() {
    return ["src", "alt"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._state = null;
    this._onKey = (e) => {
      if (e.key === "Escape") this.close();
    };
  }

  connectedCallback() {
    // Adopt a child <img> (also used as the no-JS fallback when server-rendered)
    const child = this.querySelector("img");
    if (child && !this.hasAttribute("src")) {
      this.setAttribute("src", child.getAttribute("src") || "");
      if (!this.hasAttribute("alt")) this.setAttribute("alt", child.getAttribute("alt") || "");
    }
    if (child) child.remove();
    this.render();
  }

  disconnectedCallback() {
    document.removeEventListener("keydown", this._onKey);
  }

  attributeChangedCallback() {
    if (this.isConnected && this.shadowRoot.firstChild) this.render();
  }

  render() {
    const src = this.getAttribute("src") || "";
    const alt = this.getAttribute("alt") || "";
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: inline-block; position: relative; overflow: hidden;
                border-radius: inherit; vertical-align: top; }
        button { all: unset; display: block; width: 100%; height: 100%;
                 cursor: zoom-in; border-radius: inherit; }
        button:focus-visible { outline: 3px solid #2563eb; outline-offset: -3px; }
        img { width: 100%; height: 100%; object-fit: cover; display: block;
              transition: transform 450ms cubic-bezier(.4, 0, .2, 1); }
        button:hover img { transform: scale(1.08); }
        @media (prefers-reduced-motion: reduce) {
          img { transition: none; } button:hover img { transform: none; }
        }
      </style>
      <button type="button"><img></button>`;
    const img = this.shadowRoot.querySelector("img");
    img.src = src;
    img.alt = alt;
    const btn = this.shadowRoot.querySelector("button");
    btn.setAttribute("aria-label", `Expand ${alt || "image"}`);
    btn.addEventListener("click", () => this.open());
  }

  open() {
    if (this._state) return;
    const tile = this.shadowRoot.querySelector("button");
    const r = this.getBoundingClientRect();
    const alt = this.getAttribute("alt") || "";
    const src = this.getAttribute("full-src") || this.getAttribute("src");
    const radius = getComputedStyle(this).borderRadius;
    const ease = "420ms cubic-bezier(.4,0,.2,1)";

    const overlay = document.createElement("div");
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", alt || "Image preview");
    overlay.style.cssText = `position:fixed;z-index:2147483647;overflow:hidden;cursor:zoom-out;
      background:#000;border-radius:${radius};
      left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px;
      transition:left ${ease},top ${ease},width ${ease},height ${ease},border-radius ${ease};`;

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.style.cssText = "width:100%;height:100%;object-fit:cover;display:block;";
    overlay.appendChild(img);

    const close = document.createElement("button");
    close.type = "button";
    close.textContent = "\u00d7";
    close.setAttribute("aria-label", "Close preview");
    close.style.cssText = `position:absolute;top:12px;right:16px;width:40px;height:40px;border:0;
      border-radius:50%;background:rgba(0,0,0,.55);color:#fff;font-size:26px;line-height:1;
      cursor:pointer;opacity:0;transition:opacity 250ms 300ms;`;
    overlay.appendChild(close);

    document.body.appendChild(overlay);
    this._state = { overlay, close, img, tile };

    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        Object.assign(overlay.style, {
          left: "0px", top: "0px", width: "100vw", height: "100vh", borderRadius: "0px",
        });
        img.style.objectFit = "contain";
        close.style.opacity = "1";
      })
    );

    overlay.addEventListener("click", () => this.close());
    document.addEventListener("keydown", this._onKey);
    close.focus();
    this.dispatchEvent(new CustomEvent("preview-open", { detail: { src, alt } }));
  }

  close() {
    if (!this._state) return;
    const { overlay, close, img, tile } = this._state;
    this._state = null;
    document.removeEventListener("keydown", this._onKey);

    const r = this.getBoundingClientRect();
    close.style.opacity = "0";
    img.style.objectFit = "cover";
    Object.assign(overlay.style, {
      left: r.left + "px", top: r.top + "px", width: r.width + "px", height: r.height + "px",
      borderRadius: getComputedStyle(this).borderRadius,
    });
    const done = () => overlay.remove();
    overlay.addEventListener("transitionend", done, { once: true });
    setTimeout(done, 600);
    tile.focus();
    this.dispatchEvent(new CustomEvent("preview-close"));
  }
}
