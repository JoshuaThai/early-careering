# Each name followed by : defines a target. Running make dev finds dev: 
# and executes npm run dev. .PHONY tells Make that these targets are commands, 
# so a file or folder named test won’t cause make test to skip running.
.PHONY: install dev build test

build:
	cd early-careering && npm run build

start:
	cd early-careering && npm run start

dev:
	npm run dev