# 打包docs文件
npm run build:docs && git checkout gh-pages && mv ./docs/* ./ && git add . && git commit -m 'update docs' && git push
