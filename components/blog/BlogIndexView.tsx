import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { blogCategories } from "@/lib/blog/categories";
import { getPostsByCategory } from "@/lib/blog/posts";

export default function BlogIndexView() {
  return (
    <>
      <Nav theme="solid" />
      <main className="min-h-screen bg-bone pb-24 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <Breadcrumbs
            items={[
              { name: "Inicio", path: "/" },
              { name: "Blog", path: "/blog" },
            ]}
          />
          <p className="text-sm font-medium uppercase tracking-widest text-coral">
            Biblioteca de contenido
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
            Guías que responden lo que tus clientes preguntan
          </h1>
          <p className="mt-4 text-lg text-mute">
            Cinco categorías — precios, industrias, IA, mercados locales e
            investigación. Priorizamos pocas piezas excelentes (~2 al mes) sobre
            publicar todos los días.
          </p>

          <div className="mt-14 space-y-16">
            {blogCategories.map((category) => {
              const posts = getPostsByCategory(category.id);
              if (posts.length === 0) {
                return null;
              }

              return (
                <section key={category.id} id={category.id}>
                  <p className="text-xs font-medium uppercase tracking-widest text-coral">
                    Categoría {category.letter}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-bold text-ink md:text-3xl">
                    {category.title}
                  </h2>
                  <p className="mt-2 text-mute">{category.summary}</p>

                  <div className="mt-6 space-y-4">
                    {posts.map((post) => (
                      <a
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block rounded-2xl border border-ink-line/15 bg-white px-6 py-5 transition hover:border-coral/40"
                      >
                        <p className="text-xs uppercase tracking-wider text-coral">
                          {post.tags.join(" · ")}
                        </p>
                        <h3 className="mt-2 font-display text-xl font-bold text-ink md:text-2xl">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-mute">
                          {post.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
