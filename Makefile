install:
	npm ci

lint:
	npx eslint .

test:
	npm test

coverage:
	npx jest --coverage 

watch:
	npx jest --watch