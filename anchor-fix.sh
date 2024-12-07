#!/bin/bash

# Path to your blog folder
blog_folder="blog"

# Loop through all files in the blog folder
for file in "$blog_folder"/*; do
    echo $file

    # Use sed to replace markdown links with HTML anchor tags
    # This pattern matches [text](url) and replaces it with <a href="url">text</a>
    sed -i '' 's/!\[\([^]]*\)\](\([^)]*\))/image \2\n    alt \1/g' "$file"
    sed -i '' 's/\(\[\([^]]*\)\](\([^)]*\))\)/<a href="\3">\2<\/a>/g' "$file"
done
