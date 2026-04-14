#!/bin/bash
# Convert all business markdown documents to Word format using pandoc
# Mirrors the source folder structure into docs-word/

set -e

cd "$(dirname "$0")"

OUTPUT_ROOT="docs-word"
SOURCES=("data-room" "business-docs" "sales-materials")

# Clean previous conversion
rm -rf "$OUTPUT_ROOT"
mkdir -p "$OUTPUT_ROOT"

total=0
failed=0
failed_files=()

for src in "${SOURCES[@]}"; do
  if [ ! -d "$src" ]; then
    echo "Skipping missing folder: $src"
    continue
  fi

  echo "=== Converting $src ==="

  # Find all .md files
  while IFS= read -r md_file; do
    # Determine output path: mirror structure, swap extension
    rel_path="${md_file#./}"
    out_path="$OUTPUT_ROOT/${rel_path%.md}.docx"
    out_dir="$(dirname "$out_path")"

    mkdir -p "$out_dir"

    # Convert with pandoc
    if pandoc "$md_file" -o "$out_path" --from=markdown --to=docx 2>/dev/null; then
      total=$((total + 1))
      if [ $((total % 20)) -eq 0 ]; then
        echo "  ... $total converted"
      fi
    else
      failed=$((failed + 1))
      failed_files+=("$md_file")
    fi
  done < <(find "$src" -type f -name "*.md")
done

echo ""
echo "=== Summary ==="
echo "Converted: $total"
echo "Failed:    $failed"
if [ $failed -gt 0 ]; then
  echo "Failed files:"
  for f in "${failed_files[@]}"; do
    echo "  - $f"
  done
fi
echo "Output:    $OUTPUT_ROOT/"
