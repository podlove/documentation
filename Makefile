all:
	mkdir -p tmp/deploy
	cp -r output/* tmp/deploy
	git checkout master
	cp -r tmp/deploy/* .
	rm -rf tmp output .sass-cache
	git add -A
	git commit -m "deploy"
	git pull origin master
	git push origin master
	git checkout development