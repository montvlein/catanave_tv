/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://catannabis.com',
    generateRobotsTxt: true,
    changefreq: 'monthly',
    priority: 0.7, // Prioridad de las páginas (entre 0 y 1)
    sitemapSize: 7000, // Tamaño máximo de URLs por archivo sitemap
};

module.exports = config;
