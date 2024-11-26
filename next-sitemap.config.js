const { createClient } = require('@sanity/client');

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function getProjects() {
  const query = `*[_type == "historieta"]{ "slug": slug.current }`;
  const projects = await sanityClient.fetch(query);
  return projects.map((project) => `/proyectos/${project.slug}`);
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://catannabis.com',
    generateRobotsTxt: true,
    changefreq: 'monthly',
    priority: 1, // Prioridad de las páginas (entre 0 y 1),
    alternateRefs: [],
    sitemapSize: 7000,
    transform: async (config, path) => {
        let priority = config.priority

        switch (path) {
            case "/":
                priority = "1.0"
                break;
            case "/proyectos":
                priority = "0.7"
                break;
            case "/eventos":
                priority = "0.7"
                break;
            default:
                priority = "0.5"
                break;
        }

        return {
          loc: path,
          changefreq: config.changefreq,
          priority,
          lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
          alternateRefs: config.alternateRefs ?? [],
        }
    },
    additionalPaths: async (config) => {
        const paths = await getProjects()
        const pathsToAdd = await Promise.all(
            paths.map((path) => config.transform(config, path))
        );
        return pathsToAdd
    },
};
