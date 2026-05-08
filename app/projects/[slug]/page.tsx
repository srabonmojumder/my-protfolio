import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projects } from "../../data/projects"
import ProjectDetail from "./ProjectDetail"

const siteUrl = "https://srabonmozumder.web.app"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  const projectUrl = `${siteUrl}/projects/${project.slug}/`
  const ogImage = project.images?.[0]
    ? `${siteUrl}${project.images[0]}`
    : `${siteUrl}/og-image.png`

  const description = project.description || project.longDescription || ""

  return {
    title: `${project.title} — ${project.category}`,
    description,
    keywords: [
      project.title,
      project.category,
      ...(project.technologies ?? []),
      "Srabon Mozumder",
      "Frontend Developer Portfolio",
    ],
    alternates: {
      canonical: `/projects/${project.slug}/`,
    },
    openGraph: {
      type: "article",
      url: projectUrl,
      title: `${project.title} — ${project.category} | Srabon Mozumder`,
      description,
      siteName: "Srabon Mozumder — Frontend Developer",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${project.category}`,
      description,
      images: [ogImage],
    },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
