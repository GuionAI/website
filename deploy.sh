#!/bin/bash

# Deploy script for Guion Official website to Cloudflare Workers

set -e

echo "🚀 Starting deployment to Cloudflare Workers..."

# Deploy using npm script
echo "☁️  Building and deploying to Cloudflare Workers..."
bun run deploy

echo "✅ Deployment complete!"
echo ""
echo "📝 Note: Make sure you have configured your Cloudflare API token:"
echo "   - Run 'wrangler login' if you haven't authenticated"
echo "   - Or set CLOUDFLARE_API_TOKEN environment variable"
echo ""
echo "🔗 Your site should be available at: https://guion-official.<your-subdomain>.workers.dev"