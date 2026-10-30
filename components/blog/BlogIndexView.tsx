import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog/posts";

export default function BlogIndexView() {
  return (
    <>
      <Nav theme="solid" />
      <main className="min-h-screen bg-bone pb-24 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-coral">
            Blog
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
            Ideas para hacer crecer tu negocio
          </h1>
          <p className="mt-4 text-lg text-mute">
            NFC, leads, SEO, AI SEO y desarrollo web — pensado para empresas en
            Honduras.
          </p>

          <div className="mt-12 space-y-4">
            {blogPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-2xl border border-ink-line/15 bg-white px-6 py-5 transition hover:border-coral/40"
              >
                <p className="text-xs uppercase tracking-wider text-coral">
                  {post.tags.join(" · ")}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-ink">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-mute">{post.description}</p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
