#!/usr/bin/env sh
if [ -f .env.prod ]; then
    # shellcheck disable=SC2046
    export $(cat .env.prod | grep -v '^#' | xargs)
fi

set -e
yarn run build
cp ecosystem.config.cjs .output/
cp .gitignore .output/
cd .output/


git init
git add -A
git commit -m 'deploy'

git push -f https://$GITHUB_TOKEN@github.com/Jozaguts/landing.git master:web

cd -
rm -rf /.output