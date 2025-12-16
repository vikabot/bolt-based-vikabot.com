# 🚀 VikaBot Website - Setup Guide

## ✅ What's Been Implemented

All **Critical Priority** items have been successfully implemented:

### 1. CI/CD Pipelines (4 Workflows)

✅ **`.github/workflows/ci.yml`** - Continuous Integration
- Builds site on every PR and push
- Validates HTML, JavaScript, Markdown
- Checks all links (internal & external)
- Runs spell checking
- Tests on Ruby 3.1 & 3.2

✅ **`.github/workflows/cd.yml`** - Continuous Deployment
- Auto-deploys to GitHub Pages on main branch
- Runs post-deployment validation
- Checks HTTPS configuration

✅ **`.github/workflows/lighthouse.yml`** - Performance Monitoring
- Runs Lighthouse CI on PRs
- Weekly performance audits
- Enforces performance budgets
- Posts results as PR comments

✅ **`.github/workflows/security.yml`** - Security Scanning
- Daily dependency vulnerability scans
- Secret leak detection (Gitleaks)
- CodeQL security analysis
- Security headers validation

### 2. Testing Infrastructure

✅ **package.json** - Node.js dependencies
- ESLint for JavaScript linting
- Lighthouse CI for performance
- Markdownlint for content
- cSpell for spell checking
- http-server for local testing

✅ **Configuration Files:**
- `.eslintrc.json` - JavaScript linting rules
- `.lighthouserc.json` - Performance budgets
- `.markdownlint.json` - Markdown style guide
- `.cspell.json` - Custom dictionary

✅ **Gemfile** - Updated with HTMLProofer

### 3. Contact Form Fix

✅ **Replaced `mailto:` with Web3Forms**
- Professional form submission
- Spam protection (honeypot)
- Real-time validation
- Success/error messaging
- Email notifications

✅ **Updated Files:**
- `contact.md` - New form HTML
- `assets/js/main.js` - Form handling logic

### 4. Documentation

✅ **README.md** - Comprehensive documentation
- Setup instructions
- CI/CD pipeline details
- Testing commands
- Troubleshooting guide
- Contact form setup

✅ **Updated .gitignore**
- Added build artifacts
- Testing directories
- Node/Ruby dependencies

---

## 🔧 Required Actions

### STEP 1: Web3Forms Setup (Critical - 5 minutes)

The contact form **will not work** until you add your Web3Forms access key:

1. Go to https://web3forms.com
2. Enter your email: `support@vikabot.com`
3. Click "Get Access Key" (free, no signup)
4. Copy your access key
5. Update `contact.md` line 77:

```html
<input type="hidden" name="access_key" value="PASTE_YOUR_KEY_HERE">
```

**Test it:** After updating, submit the form to verify emails arrive.

---

### STEP 2: Install Dependencies (Before First Run)

```bash
# Install Ruby dependencies
bundle install

# Install Node.js dependencies
npm install
```

---

### STEP 3: GitHub Pages Configuration

Ensure GitHub Pages is set to use GitHub Actions:

1. Go to **Settings** → **Pages**
2. **Source:** Select "GitHub Actions" (not "Deploy from branch")
3. **Custom domain:** `www.vikabot.com` (if not already set)
4. **Enforce HTTPS:** ✅ Enabled

---

### STEP 4: Test Locally

Before committing, test everything works:

```bash
# Start local server
npm run serve

# In another terminal, run tests
npm test
```

Visit http://localhost:4000 and test:
- ✅ All pages load
- ✅ Navigation works
- ✅ Contact form displays (won't submit until Web3Forms key added)

---

## 📊 CI/CD Pipeline Behavior

### On Pull Requests:
- ✅ All CI tests run automatically
- ✅ Lighthouse performance check
- ✅ Security scans
- ❌ Will **NOT** deploy (deploy only on main)

### On Push to Main:
- ✅ CI tests run first
- ✅ If CI passes → Auto-deploy to GitHub Pages
- ✅ Post-deployment validation
- ⏱️ Site live in ~2-3 minutes

### Scheduled:
- 🔒 Security scans: Daily at 2 AM UTC
- 📊 Lighthouse audit: Weekly on Mondays at 9 AM UTC

---

## 🧪 Available Test Commands

```bash
# Run all tests
npm test

# Individual tests
npm run lint:js        # JavaScript linting
npm run lint:md        # Markdown linting
npm run spellcheck     # Spell checking
npm run lighthouse     # Performance test

# Jekyll commands
npm run build          # Build production site
npm run serve          # Start dev server
npm run clean          # Clean build artifacts
```

---

## 🔍 What to Expect

### First Push to This Branch

The CI workflow will run and may show some warnings:

**Expected Warnings (Safe to Ignore):**
- ⚠️  External link checks may fail (rate limiting)
- ⚠️  Spell check might flag technical terms
- ⚠️  Lighthouse may be below threshold initially

**Must Fix:**
- ❌ HTML validation errors
- ❌ Broken internal links
- ❌ JavaScript errors

### After Merge to Main

1. CD workflow deploys to GitHub Pages
2. Site updates automatically
3. Post-deployment checks run
4. Security scan triggered

---

## 🎯 Performance Budgets

Your site must meet these Lighthouse scores:

| Metric | Target | Level |
|--------|--------|-------|
| Performance | 80% | Warning |
| Accessibility | 90% | Error |
| Best Practices | 85% | Warning |
| SEO | 90% | Error |

**Failing these will:**
- ⚠️  **Warning:** Shows in logs but doesn't fail build
- ❌ **Error:** Currently set to continue-on-error for initial setup

---

## 🔐 Security Features

✅ **Active Protection:**
- Dependency scanning (Ruby & Node.js)
- Secret leak detection
- CodeQL analysis
- Automated security updates via Dependabot (if enabled)

⚠️  **Recommended (Not Yet Active):**
- Security headers (configure at hosting level)
- Content Security Policy
- HSTS preload

---

## 📝 Next Steps (After This Works)

Once CI/CD is working, consider:

1. **High Priority Items:**
   - Add technical specifications to products
   - Create case studies page
   - Add customer testimonials
   - Display certifications/partnerships

2. **Performance Optimization:**
   - Replace TailwindCSS CDN with build process
   - Optimize images
   - Add lazy loading

3. **B2B Enhancements:**
   - Add RFQ (Request for Quote) functionality
   - Create technical resources section
   - Add live chat widget
   - Integration with CRM

---

## 🆘 Troubleshooting

### "CI workflow failed"
- Check Actions tab for specific error
- Most likely: Missing dependencies or broken links
- Run `npm test` locally to debug

### "Deploy failed"
- Check GitHub Pages is set to "GitHub Actions"
- Verify CNAME file exists (for custom domain)
- Check repository settings

### "Contact form not working"
- Did you add Web3Forms access key?
- Check browser console for errors
- Verify access key is valid at web3forms.com

### "Spell check failing"
- Add technical terms to `.cspell.json` → `words` array
- Example: `"Jetson", "RISC", "NVMe"`

---

## 📞 Support

**Questions about this setup?**
- Check the main README.md
- Review workflow files in `.github/workflows/`
- Test locally before pushing

**Web3Forms Issues?**
- Documentation: https://docs.web3forms.com
- Support: https://web3forms.com/support

---

## ✨ Success Checklist

Before considering this complete:

- [ ] Web3Forms access key added to `contact.md`
- [ ] Dependencies installed (`bundle install` && `npm install`)
- [ ] Local tests pass (`npm test`)
- [ ] Site builds locally (`npm run build`)
- [ ] Contact form tested locally
- [ ] GitHub Pages configured for GitHub Actions
- [ ] CI workflow runs successfully on PR
- [ ] CD workflow deploys successfully to main
- [ ] Production site loads at www.vikabot.com
- [ ] Contact form submissions arrive via email

---

**You're all set! The critical infrastructure is in place. 🎉**

Push your changes and watch the CI/CD pipeline in action!
