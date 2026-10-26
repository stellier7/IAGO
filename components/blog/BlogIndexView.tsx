"use client";

import { motion, useReducedMotion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { blogCategories } from "@/lib/blog/categories";
import { getPostsByCategory } from "@/lib/blog/posts";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

export default function BlogIndexView() {
  const reduceMotion = useReducedMotion();
  const categoriesWithPosts = blogCategories
    .map((category) => ({
      category,
      posts: getPostsByCategory(category.id),
    }))
    .filter((entry) => entry.posts.length > 0);

  return (
    <>
      <Nav theme="overlay" />
      <main className="min-h-screen bg-bone">
        <section className="relative overflow-hidden bg-ink pb-16 pt-32 text-bone md:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-coral/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-coral/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-coral/40 to-transparent"
          />

          <div className="relative mx-auto max-w-content px-6">
            <Breadcrumbs
              tone="dark"
              items={[
                { name: "Inicio", path: "/" },
                { name: "Blog", path: "/blog" },
              ]}
            />

            <motion.div
              variants={staggerContainer}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
            >
              <motion.p
                variants={fadeUp}
                className="text-sm font-medium uppercase tracking-[0.2em] text-coral"
              >
                Biblioteca iAGO
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-tightest md:text-6xl"
              >
                Guías que responden lo que tus clientes preguntan
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-lg text-bone/65"
              >
                Cinco categorías — precios, industrias, IA, mercados locales e
                investigación. Priorizamos pocas piezas excelentes (~2 al mes)
                sobre publicar todos los días.
              </motion.p>

              <motion.nav
                variants={fadeUp}
                aria-label="Categorías del blog"
                className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-bone/10 pt-8"
              >
                {categoriesWithPosts.map(({ category, posts }) => (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    className="group flex items-baseline gap-2 text-sm text-bone/55 transition hover:text-bone"
                  >
                    <span className="font-display text-lg font-bold text-coral transition group-hover:text-coral-bright">
                      {category.letter}
                    </span>
                    <span>{category.title}</span>
                    <span className="text-bone/30">{posts.length}</span>
                  </a>
                ))}
              </motion.nav>
            </motion.div>
          </div>
        </section>

        <div className="mx-auto max-w-content px-6 pb-28 pt-16 md:pt-20">
          <div className="space-y-24">
            {categoriesWithPosts.map(({ category, posts }, index) => (
              <motion.section
                key={category.id}
                id={category.id}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.16),
                }}
                className="scroll-mt-28"
              >
                <div className="grid gap-8 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-12">
                  <p
                    aria-hidden
                    className="font-display text-7xl font-bold leading-none tracking-tightest text-coral/25 md:text-8xl"
                  >
                    {category.letter}
                  </p>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-coral">
                      Categoría {category.letter}
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-bold tracking-tightest text-ink md:text-4xl">
                      {category.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-mute">
                      {category.summary}
                    </p>

                    <ul className="mt-10 divide-y divide-ink-line/10 border-y border-ink-line/10">
                      {posts.map((post) => (
                        <li key={post.slug}>
                          <a
                            href={`/blog/${post.slug}`}
                            className="group flex flex-col gap-3 py-6 transition md:flex-row md:items-end md:justify-between md:gap-10"
                          >
                            <div className="min-w-0">
                              <p className="text-xs uppercase tracking-wider text-coral">
                                {post.tags.join(" · ")}
                              </p>
                              <h3 className="mt-2 font-display text-xl font-bold tracking-tightest text-ink transition group-hover:text-coral md:text-2xl">
                                {post.title}
                              </h3>
                              <p className="mt-2 max-w-2xl text-sm text-mute md:text-base">
                                {post.description}
                              </p>
                            </div>
                            <span className="shrink-0 text-sm font-semibold text-ink/40 transition group-hover:translate-x-1 group-hover:text-coral">
                              Leer →
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

          <section className="mt-24 overflow-hidden rounded-[2rem] bg-ink px-8 py-12 text-bone md:px-12 md:py-14">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-coral">
              Siguiente paso
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tightest md:text-4xl">
              ¿Quieres aplicar esto a tu negocio?
            </h2>
            <p className="mt-4 max-w-lg text-bone/65">
              Web, SEO y automatizaciones con alcance claro — sin cuota de
              posts vacíos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-coral-bright"
              >
                Hablar con iAGO
              </a>
              <a
                href="/pricing"
                className="rounded-full border border-bone/25 px-7 py-3.5 text-sm font-semibold transition hover:border-coral hover:text-coral"
              >
                Ver planes
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
