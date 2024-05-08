import type { PageType } from "$lib/types/page-type";
import { writable, type Writable } from "svelte/store";

export const Pages: Writable<Array<PageType>> = writable([
    
]);