#!/bin/bash
#
# This scrip provides a copy of kromosynth-render from github.com/synth-is/kromosynth-render
# This script will do nothing if the archive of kromosynth-render has already been
# downloaded and extracted.

DIR=$(dirname -- "${BASH_SOURCE[0]}")
cd -- "$DIR"

VERSION="2023-12-16"

UNPACKED=kromosynth-render-$VERSION

if [ ! -d "$UNPACKED" ]; then

  ARCHIVE=kromosynth-render-$VERSION.tar.gz
  if [ ! -f "$ARCHIVE" ]; then
    curl -L "https://github.com/synth-is/kromosynth-render/archive/refs/tags/$VERSION.tar.gz" > "$ARCHIVE"
  fi

  tar xf "$ARCHIVE"
fi

cp -R -- $UNPACKED src/kromosynth-render

# Install dependencies, using a Node download with `get-node.sh`
NODE_VERSION=v18.12.1

# TODO? for ARCH in darwin-x64; do

"./node-$NODE_VERSION-darwin-arm64/bin/npx" npm install --prefix src/kromosynth-render/render-socket