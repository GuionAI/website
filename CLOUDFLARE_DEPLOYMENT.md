# Cloudflare Workers Deployment Guide

## Prerequisites

1. **Cloudflare Account**: Sign up at https://cloudflare.com
2. **Wrangler CLI**: Already included in devDependencies
3. **API Token**: Create at https://dash.cloudflare.com/profile/api-tokens

## 1. Cloudflare API Token Configuration

Your API token needs these permissions:

### For GitHub Actions Deployment:
Create a custom token with:
- **Account**: Cloudflare Workers Scripts:Edit
- **Account**: Account Settings:Read
- **Zone**: Zone:Read (if using custom domain)

### Token Template:
Use "Edit Cloudflare Workers" template and add:
- Account Resources: Include - Your Account
- Zone Resources: Include - All zones (or specific zone)

## 2. GitHub Secrets Setup

Add these secrets to your GitHub repository:
- `CLOUDFLARE_API_TOKEN`: Your API token from step 1
- `CLOUDFLARE_ACCOUNT_ID`: Found in Cloudflare dashboard right sidebar

## 3. Local Deployment

```bash
# Login to Cloudflare (first time only)
bunx wrangler login

# Deploy to Workers
./deploy.sh

# Or using npm script:
bun run deploy
```

## 4. Environment Variables

If you need environment variables, add them to wrangler.jsonc:

```jsonc
{
  "vars": {
    "MY_VAR": "value"
  }
}
```

For secrets (like API keys):
```bash
bunx wrangler secret put SECRET_NAME
```

## 5. Custom Domain Setup

1. In Cloudflare dashboard, go to Workers & Pages
2. Select your worker
3. Go to "Custom Domains" tab
4. Add your domain (e.g., guion.io or www.guion.io)

## 6. Production Deployment

The GitHub Action will automatically deploy on push to main:
- Uses `.github/workflows/deploy-workers.yml`
- Builds with SSR enabled
- Deploys to Cloudflare Workers

## 7. Monitoring

View logs and analytics:
```bash
# Real-time logs
bunx wrangler tail

# Dashboard
# Visit: https://dash.cloudflare.com/workers
```

## 8. Troubleshooting

### Build fails
- Check Node version compatibility
- Ensure all dependencies are installed
- Run `bun run typecheck` locally

### Deployment fails
- Verify API token permissions
- Check account ID is correct
- Ensure wrangler.jsonc is valid

### Runtime errors
- Use `bunx wrangler tail` for real-time logs
- Check browser console for client-side errors
- Verify environment variables are set

## 9. Rollback

If needed, rollback to previous version:
```bash
# List deployments
bunx wrangler deployments list

# Rollback
bunx wrangler rollback [deployment-id]
```

## 10. Cost Considerations

Cloudflare Workers Free Plan includes:
- 100,000 requests/day
- 10ms CPU time per request
- Unlimited sites/domains

For a blog/company site, this is more than sufficient.