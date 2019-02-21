const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Tushar Borole', // Navigation and Site Title
  siteTitleAlt: 'Tushar Borole', // Alternative Site title for SEO
  siteTitleShort: 'Tushar Borole', // short_name for manifest
  siteUrl: 'https://www.tusharborole.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Tushar Borole',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@Tushar Borole', // Twitter Username
  ogSiteName: 'Tushar Borole', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
