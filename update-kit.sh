#!/bin/sh

set -e

# Remove everything except Git history and this script.
find . \
  -not -path './.git/*' \
  -not -name '.git' \
  -not -path './update-kit.sh' \
  -delete

# Create the latest SvelteKit template directly in this directory.
npx --yes sv@latest create . \
  --no-dir-check \
  --template minimal \
  --types ts \
  --add prettier eslint \
  --install pnpm
