import { CoreError } from "./errors";

export class BrowserAssertError extends CoreError {}

export function browserAssert(): void {
  if (
    typeof window === "undefined" || !(window instanceof Window) ||
    typeof document === "undefined" || !(document instanceof Document)
  ) {
    throw new BrowserAssertError("You are not in a browser context");
  }
}

export interface BrowserImportScriptProps {
  readonly attributes: Record<string, string>;
}

export function browserImportScript(
  src: string,
  props?: BrowserImportScriptProps,
): Promise<void> {
  browserAssert();

  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    script.defer = true;
    script.onload = () => resolve();

    if (props?.attributes) {
      for (const [key, value] of Object.entries(props.attributes)) {
        script.setAttribute(key, value);
      }
    }

    document.head.appendChild(script);
  });
}

export function browserImportStyle(src: string): Promise<void> {
  browserAssert();

  return new Promise((resolve) => {
    const link = document.createElement("link");
    link.href = src;
    link.rel = "preload";
    link.as = "style";
    link.onload = () => {
      link.onload = null;
      link.rel = "stylesheet";
      resolve();
    };
    document.head.appendChild(link);
  });
}
