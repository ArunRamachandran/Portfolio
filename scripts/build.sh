#!/bin/bash
set -e

# Build v2 (main portfolio)
echo "Building v2 (main portfolio)..."
npm run build

# Copy v1 to build/v1
echo "Setting up v1 at /v1..."
mkdir -p build/v1
cp v1/index.html build/v1/

echo "✅ Build complete!"
echo "   - V2 (main): build/index.html"
echo "   - V1 (legacy): build/v1/index.html"
