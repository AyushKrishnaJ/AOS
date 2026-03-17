#!/bin/bash

# Validate input
if [ -z "$1" ]; then
  echo "Usage: $0 <folder>"
  exit 1
fi

DIR="$1"

if [ ! -d "$DIR" ]; then
  echo "Error: '$DIR' is not a valid directory"
  exit 1
fi

echo "Scanning directory recursively: $DIR"
echo "--------------------------------------"

# Compile .spl files
find "$DIR" -type f -name "*.spl" | while read -r file; do
  echo "Running: ./spl $file"
  ./spl "$file"
done

# Compile .expl files
find "$DIR" -type f -name "*.expl" | while read -r file; do
  echo "Running: ./expl $file"
  ./expl "$file"
done

echo "--------------------------------------"
echo "Done."
