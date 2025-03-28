#!/bin/bash
# Script to fix file names in the project

# Create directories if they don't exist
mkdir -p src/services
mkdir -p src/utils
mkdir -p src/controllers
mkdir -p src/models
mkdir -p src/ui
mkdir -p src/popup
mkdir -p src/background

# Check if files exist with underscore naming and rename them
if [ -f "src/services/storage_services.json" ]; then
  echo "Renaming storage_services.json to storage-service.js"
  mv src/services/storage_services.json src/services/storage-service.js
fi

if [ -f "src/utils/formatter_utils.js" ]; then
  echo "Renaming formatter_utils.js to formatter-util.js"
  mv src/utils/formatter_utils.js src/utils/formatter-util.js
fi

if [ -f "src/controllers/app_controller.js" ]; then
  echo "Renaming app_controller.js to app-controller.js"
  mv src/controllers/app_controller.js src/controllers/app-controller.js
fi

if [ -f "src/controllers/popup_controller.js" ]; then
  echo "Renaming popup_controller.js to popup-controller.js"
  mv src/controllers/popup_controller.js src/controllers/popup-controller.js
fi

echo "File name check completed"

# List any missing required files
echo "Checking for missing required files..."

required_files=(
  "src/services/storage-service.js"
  "src/services/investment-calculator.js"
  "src/services/property-data-extractor.js"
  "src/utils/formatter-util.js"
  "src/utils/event-emitter.js"
  "src/controllers/app-controller.js"
  "src/controllers/popup-controller.js"
  "src/models/investment-assumptions.js"
  "src/models/property.js"
  "src/ui/ui-manager.js"
  "src/popup.js"
  "src/background/background.js"
  "src/content.js"
)

missing_files=()

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    missing_files+=("$file")
  fi
done

if [ ${#missing_files[@]} -eq 0 ]; then
  echo "All required files are present."
else
  echo "Missing files:"
  for file in "${missing_files[@]}"; do
    echo "- $file"
  done
fi