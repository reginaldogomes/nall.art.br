import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'articles');

function fileNameToId(fileName: string) {
  return fileName.replace(/\.md$/, '');
}

export async function getSortedArticlesData() {
  const fileNames = await fs.readdir(articlesDirectory);
  const allArticlesData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const id = fileNameToId(fileName);
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
          id,
          ...(matterResult.data as { title: string; description: string }),
        };
      })
  );
  return allArticlesData;
}

export async function getArticleData(id: string) {
  const fileNames = await fs.readdir(articlesDirectory);
  const fileName = fileNames.find((name) => fileNameToId(name) === id);

  if (!fileName) {
    return null;
  }

  const fullPath = path.join(articlesDirectory, fileName);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    description: matterResult.data.description,
  };
}

export async function getAllArticleIds() {
  const fileNames = await fs.readdir(articlesDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileNameToId(fileName));
}