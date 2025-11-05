import { MetadataRoute } from 'next';
import { componentsData } from '@/lib/components-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ui-ux-catalog.vercel.app';

  // Static pages
  const staticPages = [
    '',
    '/components',
    '/design-tokens',
    '/search',
    '/use-cases',
    '/collection',
    '/examples/templates',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic component pages
  const componentPages = componentsData.map((component) => ({
    url: `${baseUrl}/components/${component.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...componentPages];
}
