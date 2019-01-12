const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Erin Fox Portfolio', // Navigation and Site Title
  siteTitleAlt: 'erin', // Alternative Site title for SEO
  siteTitleShort: 'erin', // short_name for manifest
  siteUrl: 'https://erinfox.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  // siteLogo: '/logo.png', // Used for SEO and manifest
  // siteDescription: 'Playful & Colorful One-Page website with Parallax effect',

  userTwitter: '@erinfoox', // Twitter Username

  // Manifest and Progress color
  // themeColor: tailwind.colors.orange,
  // backgroundColor: tailwind.colors.blue,
}
