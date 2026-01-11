import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://viralcrest.com';

    // Core pages
    const routes = [
        '',
        '/about-us',
        '/contact',
        '/services',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Service pages
    const services = [
        'performance-marketing',
        'website-development',
        'ecommerce-development',
        'ai-content-creation',
        'social-media-marketing',
        'seo-optimization',
        'whatsapp-automation',
        'branding-design',
    ].map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...routes, ...services];
}
