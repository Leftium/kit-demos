#!/bin/sh

set -e

# Remove everything except .git history:
find . -not -path './.git/*' -not -name '.git' -not -name 'update-kit.sh' -delete

# Install latest Kit to temp folder:
pnpm dlx sv create --template minimal --types ts --add prettier eslint --install pnpm kit-demos

# Move Kit to current folder:
shopt -s dotglob nullglob extglob
mv kit-demos/!(.|..) .
rmdir kit-demos

pnpm install