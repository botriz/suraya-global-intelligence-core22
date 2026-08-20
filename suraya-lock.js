import { readCore } from "./suraya-core.js";

export function isLocked() {
  return readCore().locked;
}

export function isSavior() {
  return readCore().savior;
}
