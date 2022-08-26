#!/bin/bash
set -e

# Check that the environment file exists.
if ! [ -f "$1.env" ]; then
  echo "Unknown environment file $1. Make sure the environment file exists."
  exit 1
fi

# Check that Node.js exists.
if ! [[ -x "$(command -v node)" || -x "$(command -v nodejs)" ]]; then
  echo "Node.js is not installed or is not in your PATH."
  exit 1
fi

# Check if the build folder exists.
if ! [ -d "./dist/" ]; then
  echo "Dist folder does not exist. Please run make/yarn build."
  exit 1
fi

# Start the bot
echo "Starting bot with environment file: $1.env"
env $(cat $1.env | xargs) node dist/index