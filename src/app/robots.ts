import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/slack', '/msteams', '/pricing', '/contact', '/sitemap.xml', '/robots.txt', '/favicon.ico', '/manifest.json', '/legal', '/general-terms'],
    },
    sitemap: 'https://revoluspace.com/sitemap.xml',
  }
}