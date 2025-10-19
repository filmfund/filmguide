#!/bin/bash

# check if docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker to run this script."
    exit 1
fi



# Loop through all .mmd files in the script directory
SCRIPT_DIR=$(dirname "$0")
pushd "$SCRIPT_DIR" || exit 1

GENERATED_COUNT=0
ERROR_COUNT=0

for file in *.mmd; do
  # Extract the base name without extension
  base_name=$(basename "$file" .mmd)
  
  echo "Generating diagram for $file..."
  # Generate SVG file using mermaid-cli
  docker run --rm -u `id -u`:`id -g` -v "$(pwd)":/data minlag/mermaid-cli -i "$file" -o "${base_name}.svg"

  if [ $? -ne 0 ]; then
    echo "Error generating diagram for $file"
    ERROR_COUNT=$((ERROR_COUNT + 1))
  else
    echo "Generated ${base_name}.svg successfully."
    GENERATED_COUNT=$((GENERATED_COUNT + 1))
  fi
done

echo "Diagram generation complete. Generated: $GENERATED_COUNT, Errors: $ERROR_COUNT"
popd || exit 1
exit 0
