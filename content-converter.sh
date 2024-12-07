#!/bin/bash

# Function to extract date and convert to required format
format_date() {
  local date_str="$1"
  # Convert date format from YYYY-MM-DDTHH:MM:SSZ to DD.MM.YYYY
  echo "$date_str" | sed -E 's/([0-9]{4})-([0-9]{2})-([0-9]{2})T.*/\3.\2.\1/'
}

# Directory containing markdown files
input_directory="src/content/blog"
output_directory="src/content/blog_output"  # Change this if you want the output elsewhere

# Create output directory if it doesn't exist
mkdir -p "$output_directory"

# Loop through each markdown file in the input directory
for input_file in "$input_directory"/*.md; do
  # Get the output file name
  output_file="$output_directory/$(basename "${input_file%.md}.sphst")"
  
  # Extract title and date from the front matter using sed
  title=$(sed -n 's/^title: //p' "$input_file")
  date=$(sed -n 's/^date: //p' "$input_file")

  # Format the date
  formatted_date=$(format_date "$date")

  # Remove the front matter (title, date, etc.) using awk
  content=$(awk '/^---$/ {in_block = !in_block; next} !in_block' "$input_file")

  # Convert markdown headings to sophist titles
  content=$(echo "$content" | sed -E 's/^## (.*)/title2 \1/')
  content=$(echo "$content" | sed -E 's/^### (.*)/title3 \1/')
  content=$(echo "$content" | sed -E 's/^#### (.*)/title4 \1/')
  content=$(echo "$content" | sed -E 's/^##### (.*)/title5 \1/')
  content=$(echo "$content" | sed -E 's/^###### (.*)/title6 \1/')

  # Keep code blocks as they are (assuming asm)
  content=$(echo "$content" | sed -E 's/```(.*)/```asm/')

  # Generate sophist format
  {
    echo "import header.sphst"
    echo ""
    echo "<main>"
    echo ""
    echo "<div class=\"container-slim\">"
    echo ""
    echo "title $title"
    echo "date $formatted_date"
    echo ""
    echo "$content"
    echo ""
    echo "</div>"
    echo ""
    echo "</main>"
    echo ""
    echo "import footer.sphst"
  } > "$output_file"

  echo "Converted $input_file to $output_file"
done
