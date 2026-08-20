import { unlockWithSavior } from "./suraya-savior.js";
import { identity } from "./suraya-identity.js";
import { isLocked, isSavior } from "./suraya-lock.js";

export function suraya(rawKeyBuffer) {
  if (rawKeyBuffer) unlockWithSavior(rawKeyBuffer);

  return {
    locked: isLocked(),
    savior: isSavior(),
    identity: identity()
  };
}
