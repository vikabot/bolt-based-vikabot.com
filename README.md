# VikaBot - AI Hardware Infrastructure Solutions

[![CI](https://github.com/vikabot/bolt-based-vikabot.com/actions/workflows/ci.yml/badge.svg)](https://github.com/vikabot/bolt-based-vikabot.com/actions/workflows/ci.yml)
[![CD](https://github.com/vikabot/bolt-based-vikabot.com/actions/workflows/cd.yml/badge.svg)](https://github.com/vikabot/bolt-based-vikabot.com/actions/workflows/cd.yml)
[![Security](https://github.com/vikabot/bolt-based-vikabot.com/actions/workflows/security.yml/badge.svg)](https://github.com/vikabot/bolt-based-vikabot.com/actions/workflows/security.yml)

Official website for VikaBot - Leading provider of AI hardware infrastructure solutions, specializing in NVIDIA Jetson, Intel NUC, RISC-V development boards, and enterprise AI systems.

## 🚀 Tech Stack

- **Static Site Generator:** Jekyll 4.3.0
- **Styling:** TailwindCSS (via CDN)
- **Theme:** Minima with custom styling
- **Hosting:** GitHub Pages
- **Form Handling:** Web3Forms
- **CI/CD:** GitHub Actions

## 📋 Prerequisites

- **Ruby:** 3.1 or higher
- **Bundler:** Latest version
- **Node.js:** 18.0 or higher
- **npm:** 9.0 or higher

## 🛠️ Local Development

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vikabot/bolt-based-vikabot.com.git
cd bolt-based-vikabot.com
```

2. Install Ruby dependencies:
```bash
bundle install
```

3. Install Node.js dependencies:
```bash
npm install
```

### Running Locally

Start the development server with live reload:
```bash
npm run serve
# or
bundle exec jekyll serve --livereload
```

The site will be available at `http://localhost:4000`

### Building

Build the production site:
```bash
npm run build
# or
bundle exec jekyll build
```

Output will be in the `_site/` directory.

## 🧪 Testing & Quality Assurance

### Run All Tests
```bash
npm test
```

### Individual Test Commands

**Lint JavaScript:**
```bash
npm run lint:js
```

**Lint Markdown:**
```bash
npm run lint:md
```

**Spell Check:**
```bash
npm run spellcheck
```

**Lighthouse Performance Test:**
```bash
npm run lighthouse
```

**HTML Validation:**
```bash
bundle exec htmlproofer ./_site --disable-external
```

## 🔄 CI/CD Pipeline

### Continuous Integration (CI)

**Triggers:** Pull requests and pushes to `main` and `claude/**` branches

**Tests Run:**
- ✅ Jekyll build validation (Ruby 3.1 & 3.2)
- ✅ HTML validation with HTMLProofer
- ✅ Internal and external link checking
- ✅ JavaScript linting (ESLint)
- ✅ Markdown linting
- ✅ Spell checking
- ✅ Critical path validation

**Workflow:** `.github/workflows/ci.yml`

### Continuous Deployment (CD)

**Triggers:** Pushes to `main` branch (after CI passes)

**Steps:**
1. Build production site
2. Run final validation
3. Deploy to GitHub Pages
4. Post-deployment smoke tests
5. HTTPS validation

**Workflow:** `.github/workflows/cd.yml`

### Lighthouse CI

**Triggers:** Pull requests, weekly schedule (Mondays 9 AM UTC), manual

**Tests:**
- Performance metrics
- Accessibility compliance (90%+ required)
- SEO validation (90%+ required)
- Best practices (85%+ recommended)
- Core Web Vitals monitoring

**Workflow:** `.github/workflows/lighthouse.yml`

### Security Scanning

**Triggers:** Pushes, pull requests, daily schedule (2 AM UTC), manual

**Scans:**
- Ruby dependency vulnerabilities (bundler-audit)
- Node.js dependency vulnerabilities (npm audit)
- Secret scanning (Gitleaks)
- CodeQL security analysis
- Security headers validation

**Workflow:** `.github/workflows/security.yml`

## 📧 Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com/) for reliable email delivery.

### Setup Instructions:

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email address (e.g., `support@vikabot.com`)
3. Get your access key
4. Update the access key in `contact.md`:

```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
```

### Features:
- ✅ Spam protection (honeypot)
- ✅ Real-time form validation
- ✅ Success/error messaging
- ✅ Email notifications
- ✅ No backend required
- ✅ Free tier: 100 submissions/month

### Optional Enhancements:

Add Cloudflare Turnstile (free CAPTCHA):
```html
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
<div class="cf-turnstile" data-sitekey="YOUR_TURNSTILE_SITE_KEY"></div>
```

## 🔐 Security

### Implemented Security Measures:

- ✅ Automated dependency scanning
- ✅ Secret leak detection
- ✅ CodeQL analysis
- ✅ HTTPS enforcement
- ✅ Form spam protection
- ⚠️  Security headers (to be configured at hosting level)

### Recommended Security Headers:

Add to your hosting configuration or `_headers` file:

```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## 📁 Project Structure

```
bolt-based-vikabot.com/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD pipelines
├── _includes/              # Reusable HTML components
│   ├── header.html
│   └── footer.html
├── _layouts/               # Page layouts
│   └── default.html
├── assets/
│   ├── css/                # Stylesheets
│   ├── js/                 # JavaScript files
│   └── images/             # Image assets
├── .eslintrc.json          # JavaScript linting config
├── .lighthouserc.json      # Performance budgets
├── .markdownlint.json      # Markdown style rules
├── .cspell.json            # Spell checker dictionary
├── _config.yml             # Jekyll configuration
├── Gemfile                 # Ruby dependencies
├── package.json            # Node.js dependencies
├── index.md                # Homepage
├── about.md                # About page
├── products.md             # Products page
├── services.md             # Services page
└── contact.md              # Contact page
```

## 🚀 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

Trigger manual deployment via GitHub Actions:

1. Go to **Actions** tab
2. Select **CD - Deploy to GitHub Pages**
3. Click **Run workflow**
4. Select branch and run

### GitHub Pages Configuration

Ensure GitHub Pages is configured:

1. Go to **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Custom domain: `www.vikabot.com`
4. Enforce HTTPS: **Enabled**

## 📊 Monitoring

### Performance Monitoring

- Lighthouse CI runs on every PR
- Weekly performance audits
- Core Web Vitals tracking
- Budget enforcement

### Security Monitoring

- Daily dependency scans
- Automated security updates
- CodeQL analysis
- Secret leak detection

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run tests: `npm test`
4. Create a pull request
5. Wait for CI checks to pass
6. Request review

## 📄 License

Copyright © 2024 VikaBot. All rights reserved.

## 📞 Support

- **Email:** support@vikabot.com
- **Website:** https://www.vikabot.com
- **LinkedIn:** https://linkedin.com/company/vikabot

## 🔧 Troubleshooting

### Build Failures

**Issue:** Jekyll build fails
```bash
# Clear cache and rebuild
bundle exec jekyll clean
bundle install
bundle exec jekyll build
```

**Issue:** Node dependencies error
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Test Failures

**Issue:** HTMLProofer fails on external links
- External link checking is rate-limited and may fail temporarily
- Tests are set to `continue-on-error` for external links

**Issue:** Lighthouse scores below threshold
- Check network conditions during test
- Review performance budgets in `.lighthouserc.json`
- Optimize images and assets

### Contact Form Not Working

**Issue:** Form submissions not received
1. Verify Web3Forms access key is correct
2. Check email spam folder
3. Verify email address in Web3Forms dashboard
4. Check browser console for errors

---

**Built with ❤️ by the VikaBot Team**
