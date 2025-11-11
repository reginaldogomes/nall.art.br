import { getArticleData, getAllArticleIds } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

export default async function ArticlePage({ params }: Props) {
  // Using await on params as a workaround for a potential Turbopack issue
  // where page props can be wrapped in a Promise.
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug);

  if (!slug) {
    notFound();
  }

  const articleData = await getArticleData(slug);

  if (!articleData) {
    notFound();
  }

  return (
    <>
      <div className="container mx-auto max-w-3xl px-4 py-20">
        <article className="prose prose-invert mx-auto">
          <h1>{articleData.title}</h1>
          <p className="text-zinc-400">{articleData.description}</p>
          <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
        </article>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const ids = await getAllArticleIds();
  return ids.map((id) => ({
    slug: id,
  }));
}
