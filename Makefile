all:
	mkdir -p tmp/deploy
	cp -r output/* tmp/deploy
	git checkout master
	cp -r tmp/deploy/* .
	rm -rf tmp output .sass-cache
	git commit -am "deploy"
	# git push origin master