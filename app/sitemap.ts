import type { MetadataRoute } from "next"
import { projects } from "./data/projects"

export const dynamic = "force-static"

const baseUrl = "https://srabonmozumder.web.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
  ]

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...routes, ...projectRoutes]
}
