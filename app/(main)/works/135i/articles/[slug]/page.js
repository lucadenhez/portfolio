import { articles } from "../articles";

export default async function ArticlePage({ params }) {
  const article = articles.find(a => a.slug === params.slug);
  if (!article) return <div>Not found</div>;

  // dynamic import based on folder structure
  const module = await import(`../${article.category}/${article.slug}.js`);
  const Component = module.default;

  return <Component />;
}
