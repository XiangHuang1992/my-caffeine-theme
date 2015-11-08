#!/bin/bash

if [ -d "kelyvin-ghost-theme" ]; then
  echo "\nKelyvin Ghost Theme is already installed. Maybe you want to update? Run:"
  echo "\ncd kelyvin-ghost-theme && sh scripts/update.sh\n"
  exit
fi

git clone https://github.com/kelyvin/kelyvin-ghost-theme.git && cd kelyvin-ghost-theme

. "$PWD"/scripts/utils.sh

welcome

echo "Getting the repository tagged commits"
git fetch --tags

echo "Resolving the latest tagged version"
latestTag=$(git describe --tags "$(git rev-list --tags --max-count=1)")

echo "Creating a stable branch from the latest tagged version"
git checkout "$latestTag"
git checkout -b stable

echo "\nTheme Installed Successful! Enjoy :-)"