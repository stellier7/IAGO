import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLdScript from "@/components/seo/JsonLdScript";
import type { BlogPost } from "@/lib/blog/posts";
import { blogPosts } from "@/lib/blog/posts";
import { buildArticleJsonLd } from "@/lib/seo/jsonld";

type BlogPostViewProps = {
  post: BlogPost;
};

export default function BlogPostView({ post }: BlogPostViewProps) {
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const path = `/blog/${post.slug}`;

  return (
    <>
      <Nav theme="solid" />
      <JsonLdScript
        data={buildArticleJsonLd({
          title: post.title,
          description: post.description,
          path,
          datePublished: post.date,
          tags: post.tags,
        })}
      />
      <main className="min-h-screen bg-bone pb-24 pt-32">
        <article className="mx-auto max-w-3xl px-6">
          <Breadcrumbs
            items={[
              { name: "Inicio", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: post.title, path },
            ]}
          />
          <p className="text-sm font-medium uppercase tracking-widest text-coral">
            Blog · {post.tags.join(" · ")}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-mute">{post.description}</p>
          <p className="mt-2 text-xs text-mute">Actualizado {post.date}</p>

          <div className="mt-12 space-y-12">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl font-bold text-ink">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-3 text-mute">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-16 rounded-2xl bg-ink px-8 py-10 text-bone">
            <h2 className="font-display text-2xl font-bold tracking-tightest">
              ¿Lo aplicamos a tu negocio?
            </h2>
            <p className="mt-3 text-bone/70">
              Web, SEO, NFC y automatizaciones con IA — con plan claro.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/#contacto"
                className="rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white transition hover:bg-coral-bright"
              >
                Contactar
              </a>
              <a
                href="/pricing"
                className="rounded-full border border-bone/30 px-6 py-3 text-sm font-semibold transition hover:border-coral hover:text-coral"
              >
                Ver planes
              </a>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="font-display text-xl font-bold text-ink">
              Más artículos
            </h2>
            <div className="mt-4 space-y-3">
              {related.map((item) => (
                <a
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="block rounded-xl border border-ink-line/15 bg-white px-5 py-4 transition hover:border-coral/40"
                >
                  <p className="font-display text-lg font-bold text-ink">
                    {item.title}
                  </p>
                </a>
              ))}
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
