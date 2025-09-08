#!/bin/sh

# Remove everything except .git history:
find . -not -path './.git/*' -not -name '.git' -not -name 'update-kit.sh' -delete

# Install latest Kit to tmp:
pnpx sv create --no-install --template minimal --types ts --no-add-ons tmp-kit
pnpx sv add eslint prettier devtools-json --no-install --no-git-check --cwd tmp-kit

# Move Kit to current folder:
shopt -s dotglob nullglob extglob
mv tmp-kit/!(.|..) .
rmdir tmp-kit

pnpm install