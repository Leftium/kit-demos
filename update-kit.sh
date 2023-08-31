#!/bin/sh

# Remove everything except .git history:
find . -not -path './.git/*' -not -name '.git' -not -name 'update-kit.sh' -delete

# Install latest Kit to tmp:
npm init @svelte-add/kit@latest kit-demos -- --install false --with typescript+eslint+prettier

# Move Kit to current folder:
mv -f kit-demos/.* . # dot files.
mv kit-demos/* .     # everything else.
rmdir kit-demos

pnpm install

