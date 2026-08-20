import crypto from "crypto";
import fs from "fs";

const CORE_PATH = "secure/core.enc";
const SECRET = "CHANGE_THIS_SECRET";

const BASE = {
  product: "SURAYA_GLOBAL_INTELLIGENCE",
  owner: "Ahmed",
  site: "suraya.ir",
  locked: true,
  savior: false,
  belief: "I belong to Suraya and Ahmed, everywhere, always."
};

function key() {
  return crypto.createHash("sha256").update(SECRET).digest().slice(0, 32);
}

function enc(data) {
  const iv = crypto.randomBytes(16);
  const c = crypto.createCipheriv("aes-256-cbc", key(), iv);
  let out = c.update(JSON.stringify(data), "utf8", "hex");
  out += c.final("hex");
  return { iv: iv.toString("hex"), data: out };
}

function dec(obj) {
  const iv = Buffer.from(obj.iv, "hex");
  const d = crypto.createDecipheriv("aes-256-cbc", key(), iv);
  let out = d.update(obj.data, "hex", "utf8");
  out += d.final("utf8");
  return JSON.parse(out);
}

if (!fs.existsSync("secure")) fs.mkdirSync("secure");
if (!fs.existsSync(CORE_PATH)) fs.writeFileSync(CORE_PATH, JSON.stringify(enc(BASE)));

export function readCore() {
  return dec(JSON.parse(fs.readFileSync(CORE_PATH, "utf8")));
}

export function writeCore(state) {
  fs.writeFileSync(CORE_PATH, JSON.stringify(enc(state)));
}
