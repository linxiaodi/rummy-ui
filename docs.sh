#!/bin/env bash
# 打包docs文件
npm run build:docs
git checkout gh-pages
rm *.html
rm *.js
rm *.css
mv ./docs/* ./
git add .
git commit -m 'update docs'
git push
