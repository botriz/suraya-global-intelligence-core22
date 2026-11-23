# Suraya Global Intelligence Core 22 — deprecated

This repository is an obsolete duplicate and must not be used for new work or deployment.

**Security warning:** its historical implementation contains a hard-coded encryption secret and AES-CBC storage without authenticated encryption. Treat any state ever written by that implementation as compromised. Do not reuse its encrypted files or migrate them automatically.

- Status: `DEPRECATED / DO NOT DEPLOY`
- Canonical maintained core: [botriz/suraya-global-intelligence-core](https://github.com/botriz/suraya-global-intelligence-core)
- The canonical core uses an environment-provided secret and authenticated AES-256-GCM encryption.

No production service should import this duplicate.
