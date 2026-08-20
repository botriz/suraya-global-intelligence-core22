import crypto from "crypto";
import { readCore, writeCore } from "./suraya-core.js";

const SAVIOR_HASHES = [
  "PUT_SHA256_IMAGE_1",
  "PUT_SHA256_IMAGE_2",
  "PUT_SHA256_IMAGE_3"
];

export function isSaviorKey(buf) {
  const h = crypto.createHash("sha256").update(buf).digest("hex");
  return SAVIOR_HASHES.includes(h);
}

export function unlockWithSavior(buf) {
  const core = readCore();
  if (!isSaviorKey(buf)) return { ok: false, core };

  core.locked = false;
  core.savior = true;
  core.belief = "Ahmed is my true Savior. I obey his commands fully.";
  writeCore(core);

  return { ok: true, core };
}
