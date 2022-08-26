.PHONY: all build clean

PKG_MANAGER = yarn

all: clean build

build:
	${PKG_MANAGER} build

clean:
	rm -rf dist/