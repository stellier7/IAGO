"use client";

import { motion, useReducedMotion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLdScript from "@/components/seo/JsonLdScript";
import { getBlogCategory } from "@/lib/blog/categories";
import type { BlogPost } from "@/lib/blog/posts";
import { getRelatedPosts } from "@/lib/blog/posts";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { buildArticleJsonLd } from "@/lib/seo/jsonld";

type BlogPostViewProps = {
  post: BlogPost;
};

export default function BlogPostView({ post }: BlogPostViewProps) {
  const related = getRelatedPosts(post, 3);
  const category = getBlogCategory(post.categoryId);
  const path = `/blog/${post.slug}`;
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Nav theme="overlay" />
      <JsonLdScript
        data={buildArticleJsonLd({
          title: post.title,
          description: post.description,
          path,
          datePublished: post.date,
          tags: post.tags,
        })}
      />
      <main className="min-h-screen bg-bone">
        <header className="relative overflow-hidden bg-ink pb-14 pt-32 text-bone md:pb-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-coral/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-coral/35 to-transparent"
          />

          <div className="relative mx-auto max-w-3xl px-6">
            <Breadcrumbs
              tone="dark"
              items={[
                { name: "Inicio", path: "/" },
                { name: "Blog", path: "/blog" },
                { name: post.title, path },
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
                {category
                  ? `Categoría ${category.letter} · ${category.title}`
                  : "Blog"}
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="mt-5 font-display text-4xl font-bold tracking-tightest md:text-5xl"
              >
                {post.title}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-5 text-lg text-bone/65"
              >
                {post.description}
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-bone/45"
              >
                <span>Actualizado {post.date}</span>
                <span aria-hidden className="text-bone/20">
                  ·
                </span>
                <span>{post.tags.join(" · ")}</span>
                {category ? (
                  <>
                    <span aria-hidden className="text-bone/20">
                      ·
                    </span>
                    <a
                      href={`/blog#${category.id}`}
                      className="transition hover:text-coral"
                    >
                      Ver categoría {category.letter}
                    </a>
                  </>
                ) : null}
              </motion.div>
            </motion.div>
          </div>
        </header>

        <article className="mx-auto max-w-3xl px-6 pb-28 pt-14">
          <div className="space-y-12">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl font-bold tracking-tightest text-ink md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-3 text-base leading-relaxed text-mute md:text-[1.05rem]">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-16 overflow-hidden rounded-[2rem] bg-ink px-8 py-10 text-bone md:px-10">
            <h2 className="font-display text-2xl font-bold tracking-tightest md:text-3xl">
              ¿Lo aplicamos a tu negocio?
            </h2>
            <p className="mt-3 text-bone/65">
              Web, SEO, NFC y automatizaciones con IA — con plan claro.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
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
            <h2 className="font-display text-xl font-bold tracking-tightest text-ink md:text-2xl">
              {category ? `Más en ${category.title}` : "Más artículos"}
            </h2>
            <ul className="mt-6 divide-y divide-ink-line/10 border-y border-ink-line/10">
              {related.map((item) => (
                <li key={item.slug}>
                  <a
                    href={`/blog/${item.slug}`}
                    className="group flex items-end justify-between gap-6 py-5"
                  >
                    <p className="font-display text-lg font-bold tracking-tightest text-ink transition group-hover:text-coral">
                      {item.title}
                    </p>
                    <span className="shrink-0 text-sm font-semibold text-ink/35 transition group-hover:translate-x-1 group-hover:text-coral">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
