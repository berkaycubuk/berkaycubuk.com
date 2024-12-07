#!/bin/bash

# Path to your blog folder
blog_folder="blog"

# Loop through all files in the blog folder
for file in "$blog_folder"/*; do
    # Check if it's a file and not a directory
    if [ -f "$file" ]; then
        # Get the filename without the .sphst extension
        filename=$(basename "$file" .sphst)
        
        # Print the anchor tag
        echo "<a href=\"/blog/$filename\">$filename</a>"
    fi
done
