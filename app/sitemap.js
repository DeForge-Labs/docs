import { nodeData } from "@/lib/node-data";

export default function sitemap() {
    const routes = [
        {
            url: 'https://docs.deforge.io',
            lastModified: new Date(),
            changeFrequency: 'never',
            priority: 1.0,
        },
        {
            url: 'https://docs.deforge.io/docs',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://docs.deforge.io/docs/nodes',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        }
    ]

    const nodeRoutes = nodeData.map(node => {
        return {
            url: `https://docs.deforge.io/docs/nodes/${node.type}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        };
    });

    routes.push(...nodeRoutes);

    return routes;

}