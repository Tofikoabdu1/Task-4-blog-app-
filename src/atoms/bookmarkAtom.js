// import { atom } from "jotai";

// export const bookmarksAtom = atom([]);
import { atomWithStorage } from "jotai/utils";

export const bookmarksAtom = atomWithStorage("bookmarks", []);
