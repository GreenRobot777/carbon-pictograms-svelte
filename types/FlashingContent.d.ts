/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FlashingContentProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class FlashingContent extends SvelteComponentTyped<
  FlashingContentProps,
  {},
  {}
> {}
