#!/bin/sh

# Remove everything except .git history:
find . -not -path './.git/*' -not -name '.git' -not -name 'update-kit.sh' -delete

# Install latest Kit to tmp:
pnpx sv create --no-install --template minimal --types ts --no-add-ons tmp-kit
pnpx sv add eslint --no-install --cwd tmp-kit
pnpx sv add prettier --no-install --cwd tmp-kit

# Move Kit to current folder:
mv -f tmp-kit/.* . # dot files.
mv tmp-kit/* .     # everything else.
rmdir tmp-kit

pnpm install

