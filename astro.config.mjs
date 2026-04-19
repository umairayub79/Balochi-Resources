// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  site: "https://umairayub79.github.io",
  base: "/Balochi-Resources",
  integrations: [
    starlight({
      title: "Balochi Resources",
      description:
        "a free, open-source resource platform for Baloch, Balochi, and Balochistan — dictionaries, grammars, literature, academic papers, audio, tools & more.",
      customCss: ["./src/styles/custom.css"],
      tableOfContents: false,
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/umairayub79/Balochi-Resources",
        },
      ],
      sidebar: [
        { label: "Home", link: "/" },
        { label: "About", link: "/about/" },
        {
          label: "Resources",
          items: [
            { label: "Dictionaries & Lexicons", link: "/dictionaries/" },
            { label: "Language Learning & Grammar", link: "/learning/" },
            { label: "Literature & Culture", link: "/literature/" },
            { label: "Academic & Linguistics", link: "/academic/" },
            { label: "Culture & Media", link: "/media/" },
            { label: "Digital Libraries & Archives", link: "/libraries/" },
            { label: "Tools & Technology", link: "/tools/" },
            { label: "Religion & Manuscripts", link: "/religion/" },
            { label: "Community & Organizations", link: "/community/" },
          ],
        },
      ],
    }),
  ],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
      ],
    ],
  },
});
