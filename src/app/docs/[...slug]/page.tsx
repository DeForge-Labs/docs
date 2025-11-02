import { getPageImage, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { LLMCopyButton, ViewOptions } from '@/components/page-actions';
import { Badge } from '@/components/ui/badge';

export default async function Page(props: PageProps<'/docs/[...slug]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const { lastModified } = page.data;

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <DocsPage 
      toc={page.data.toc}
      full={page.data.full}
      lastUpdate={lastModified ? new Date(lastModified): undefined}
      tableOfContent={{ style: 'clerk' }}
    >
      <a
        href={`https://github.com/DeForge-Labs/docs/blob/dev/content/docs/${page.path}`}
        rel="noreferrer noopener"
        target="_blank"
        className="w-fit border rounded-xl p-2 font-medium text-sm text-fd-secondary-foreground bg-fd-secondary transition-colors hover:text-fd-accent-foreground hover:bg-fd-accent shadow-md shadow-[#8754ff]"
      >
        Edit Page on GitHub
      </a>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className='mb-2'>{page.data.description}</DocsDescription>
      { page.data.tags && page.data.tags?.length > 0 && (
        <div className='flex flex-row gap-2 mb-4'>
          {page.data.tags?.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
          {page.data.difficulty ? <Badge difficulty={page.data.difficulty}>{capitalizeFirstLetter(page.data.difficulty)}</Badge> : null}
        </div>
      )}
      <div className='flex flex-row gap-2 items-center border-b pb-6'>
        <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
        <ViewOptions
          markdownUrl={`${page.url}.mdx`}
          githubUrl={`https://github.com/DeForge-Labs/docs/blob/dev/content/docs/${page.path}`}
          nodeGitHubUrl={page.data.github}
        />
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
      <hr className='mt-2' />
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/docs/[...slug]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
