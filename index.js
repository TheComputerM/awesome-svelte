module.exports = [
  {
    text: "Resources",
    items: [
      {
        text: "Official Resources",
        items: [
          { text: "Official Guide", link: "https://svelte.dev/tutorial" },
          { text: "API Reference", link: "https://svelte.dev/docs" },
          { text: "GitHub Repo", link: "https://github.com/sveltejs/svelte" },
          {
            text: "Changelog",
            link: "https://github.com/sveltejs/svelte/blob/master/CHANGELOG.md",
          },
        ],
      },
      {
        text: "Community",
        items: [{ text: "Twitter", link: "https://twitter.com/sveltejs" }],
      },
      {
        text: "Conferences",
        items: [{ text: "Svelte Summit", link: "https://sveltesummit.com/" }],
      },
      {
        text: "Podcasts",
        items: [{ text: "Svelte Radio", link: "https://www.svelteradio.com/" }],
      },
      {
        text: "Youtube Channels",
        items: [
          {
            text: "Svelte Society",
            link: "https://www.youtube.com/channel/UCZSr5B0l07JXK2FIeWA0-jw",
          },
        ],
      },
      {
        text: "Tutorials",
        items: [
          {
            text: "Getting Started with Svelte 3",
            link:
              "https://www.digitalocean.com/community/tutorials/getting-started-with-svelte-3",
            info: "DigitalOcean",
          },
          {
            text: "Building My First Svelte App",
            link:
              "https://scotch.io/tutorials/building-my-first-svelte-app-thoughts-and-impressions",
            info: "Scotch.io",
          },
          {
            text: "An Introduction to Actions",
            link: "https://svelte.school/tutorials/introduction-to-actions",
            info: "Svelte School",
          },
        ],
      },
      {
        text: "Scaffold",
        info:
          "Templates / boilerplate / seed / starter kits / stack ensemble / Yeoman generator",
        items: [
          {
            text: "Client",
            info: "Render Svelte application in the browser only",
            items: [
              {
                text: "sveltejs/template",
                link: "https://github.com/sveltejs/template",
                info:
                  "Template for building basic applications with Svelte with rollup",
              },
              {
                text: "component-template",
                link: "https://github.com/sveltejs/component-template",
                info: "A base for building shareable Svelte components",
              },
              {
                text: "svelte-component-template",
                link: "https://github.com/YogliB/svelte-component-template",
                info: "A base for building shareable Svelte 3 components",
              },
              {
                text: "svelte-pwa-template",
                link: "https://github.com/tretapey/svelte-pwa",
                info:
                  "A starter template for PWAs based in the official Template",
              },
              {
                text: "svelte-redux-toolkit",
                link: "https://github.com/Ghosts/svelte-redux-toolkit",
                info:
                  "A starter template integrating Redux-Toolkit with Svelte.",
              },
              {
                text: "svelte-ts-eslint-tailwind",
                link: "https://github.com/toerndev/svelte-ts-eslint-tailwind",
                info:
                  "Starter template and tutorial for adding ESLint, Jest and Tailwind CSS to the official TypeScript template.",
              },
              {
                text: "svelte-ts-eslint-tailwind",
                link: "https://github.com/toerndev/svelte-ts-eslint-tailwind",
                info: "Svelte TypeScript Rollup ESLint Jest Tailwind CSS",
              },
              {
                text: "svelte-ts-eslint-prettier-template",
                link: "https://github.com/NicoCevallos/svelte-template",
                info:
                  "Starter template with TS activated, and ESLint and Prettier working together.",
              },
            ],
          },
          {
            text: "Universal",
            info: "Sapper and SSR",
            items: [
              {
                text: "sapper-template#rollup",
                link: "https://github.com/sveltejs/sapper-template/tree/rollup",
                info: "The default Sapper template, available for Rollup.",
              },
              {
                text: "sapper-template#webpack",
                link:
                  "https://github.com/sveltejs/sapper-template/tree/webpack",
                info: "The default Sapper template, available for Webpack.",
              },
              {
                text:
                  "sapper-firebase-typescript-graphql-tailwindcss-actions-template",
                link:
                  "https://github.com/babichjacob/sapper-firebase-typescript-graphql-tailwindcss-actions-template",
                info:
                  "Template that includes Sapper, Firebase functions and hosting, TypeScript and TypeGraphQL, Tailwind CSS, ESLint, and automatic building and deployment with GitHub Actions.",
              },
              {
                text: "sapper-mdsvex-template",
                link: "https://github.com/pngwn/sapper-mdsvex-template",
                info: "The default Sapper template with mdsvex.",
              },
              {
                text: "sapper-mdsvex-template-webpack",
                link:
                  "https://github.com/sveltejs/sapper-template/tree/webpack",
                info: "The default Sapper template with mdsvex for webpack.",
              },
              {
                text: "sapper-postcss-template",
                link: "https://github.com/babichjacob/sapper-postcss-template",
                info:
                  "Template that includes Sapper and PostCSS preprocessing with Tailwind CSS.",
              },
              {
                text: "sapper-tailwindcss-template",
                link: "https://github.com/sarioglu/sapper-tailwindcss-template",
                info: "The default Sapper template with Tailwind CSS.",
              },
              {
                text: "sapper-template-firebase",
                link: "https://github.com/nhristov/sapper-template-firebase",
                info:
                  "Starter Rollup template for Sapper apps with Firebase functions, PostCSS, PurgeCSS, CSSNano, Tailwind CSS, and svelte-preprocess.",
              },
              {
                text: "sapper-typescript-graphql-template",
                link:
                  "https://github.com/babichjacob/sapper-typescript-graphql-template",
                info:
                  "Template that includes Sapper, TypeScript preprocessing, and a GraphQL server through TypeGraphQL.",
              },
              {
                text: "SENT-template",
                link: "https://github.com/Zimtir/SENT-template",
                info: "SENT (Sapper Express Node Template) and other tools.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    text: "Integrations",
    items: [
      {
        text: "Preprocessing",
        items: [
          {
            text: "svelte-preprocess",
            link: "https://github.com/sveltejs/svelte-preprocess",
            info:
              "A ✨ magical ✨ Svelte preprocessor with sensible defaults and support for: PostCSS, SCSS, Less, Stylus, Coffeescript, TypeScript, Pug and much more.",
          },
          {
            text: "MDSveX",
            link: "https://github.com/pngwn/MDsveX",
            info: "A markdown preprocessor for Svelte.",
          },
          {
            text: "svelte-preprocess-markdown",
            link: "https://github.com/AlexxNB/svelte-preprocess-markdown",
            info: "Write Svelte components in markdown syntax",
          },
          {
            text: "svelte-preprocess-less",
            link: "https://github.com/ls-age/svelte-preprocess-less",
            info: "Svelte preprocessor for less.",
          },
          {
            text: "modular-css",
            link:
              "https://github.com/tivac/modular-css/tree/main/packages/svelte",
            info: "Svelte preprocessor support for modular-css.",
          },
          {
            text: "svelte-preprocess-postcss",
            link: "https://github.com/TehShrike/svelte-preprocess-postcss",
            info: "Use PostCSS to preprocess your styles in Svelte components",
          },
          {
            text: "svelte-preprocess-sass",
            link: "https://github.com/ls-age/svelte-preprocess-sass",
            info: "Svelte preprocessor for sass",
          },
        ],
      },
    ],
  },
  {
    text: "Components & Libraries",
    items: [
      {
        text: "UI Libraries",
        items: [
          {
            text: "Svelte Materialify",
            link: "https://github.com/TheComputerM/svelte-materialify",
            info:
              "A Material UI Design Component library for Svelte heavily inspired by vuetify.",
          },
          {
            text: "Sveltestrap",
            link: "https://github.com/bestguy/sveltestrap",
            info: "Bootstrap 4 components for Svelte",
          },
          {
            text: "Smelte",
            link: "https://github.com/matyunya/smelte",
            info:
              "UI framework with material components built with Svelte and Tailwind CSS",
          },
          {
            text: "Svelte Material UI",
            link: "https://github.com/hperrin/svelte-material-ui",
            info: "Svelte Material UI Components",
          },
        ],
      },
      {
        text: "UI Components",
        items: [
          {
            text: "Table",
            info: "Tables / data grids",
            items: [
              {
                text: "svelte-table",
                link: "https://github.com/dasDaniel/svelte-table",
                info:
                  "A svelte-3 table implementation that allows sorting and filtering",
              },
              {
                text: "svelte-generic-crud-table",
                link: "https://github.com/ivosdc/svelte-generic-crud-table",
                info:
                  "Agnostic web-component for object-arrays with CRUD functionality.",
              },
            ],
          },
          {
            text: "Notification",
            info:
              "Toaster / snackbar — Notify the user with a modeless temporary little popup",
            items: [
              {
                text: "svelte-notifications",
                link:
                  "https://github.com/beyonk-adventures/svelte-notifications",
                info:
                  "Svelte toast notifications component that can be used in any JS application",
              },
              {
                text: "svelte-favicon-badge",
                link: "https://github.com/kevmodrome/svelte-favicon-badge",
                info:
                  "A custom component that adds a favicon and a badge that you can use to show for example number of unread messages, etc.",
              },
            ],
          },
          {
            text: "Icons",
            items: [
              {
                text: "svelte-fa",
                link: "https://github.com/Cweili/svelte-fa",
                info: "Tiny FontAwesome 5 component for Svelte",
              },
              {
                text: "svelte-simple-icons",
                link:
                  "https://github.com/beyonk-adventures/svelte-simple-icons",
                info: "Simple Brand Icons for Svelte",
              },
              {
                text: "svelte-awesome",
                link: "https://github.com/RobBrazier/svelte-awesome",
                info:
                  "Awesome SVG icon component for Svelte JS, built with Font Awesome icons.",
              },
              {
                text: "svelte-icons",
                link: "https://github.com/AnxiousDarkly/svelte-icons",
                info: "Icon components for svelte",
              },
            ],
          },
          {
            text: "Calendar",
            info: "Display non-editable events in a Calendar",
            items: [
              {
                text: "svelte-fullcalendar",
                link: "https://github.com/YogliB/svelte-fullcalendar",
                info: "A Svelte component wrapper around FullCalendar",
              },
              {
                text: "svelte-calendar",
                link: "https://github.com/6eDesign/svelte-calendar",
                info:
                  "A lightweight datepicker with neat animations and a unique UX.",
              },
            ],
          },
          {
            text: "Maps",
            info: "",
            items: [
              {
                text: "svelte-googlemaps",
                link: "https://github.com/beyonk-adventures/svelte-googlemaps",
                info: "Svelte Google Maps Components",
              },
              {
                text: "svelte-mapbox",
                link: "https://github.com/beyonk-adventures/svelte-mapbox",
                info:
                  "MapBox Map and Autocomplete components for Svelte (or Vanilla JS)",
              },
              {
                text: "leaflet-svelte",
                link: "https://github.com/anoram/leaflet-svelte",
                info: "Svelte wrapper for leaflet.",
              },
            ],
          },
          {
            text: "Form",
            info: "Let the user create & edit data",
            items: [
              {
                text: "Checkbox",
                info: "Switch / on/off toggle / checkbox",
                items: [
                  {
                    text: "svelte-checkbox",
                    link: "https://github.com/HosseinShabani/svelte-checkbox",
                    info:
                      "A checkbox component for Svelte (Cool animation, Customizable).",
                  },
                  {
                    text: "svelte-toggle",
                    link: "https://github.com/beyonk-adventures/svelte-toggle",
                    info: "Toggle component for Svelte",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "Frameworks",
        items: [
          {
            text: "Server Side Rendering",
            items: [
              {
                text: "Sapper",
                link: "https://sapper.svelte.dev/",
                info:
                  "The next small thing in web development, powered by Svelte",
              },
            ],
          },
          {
            text: "Static Site Generation",
            items: [
              {
                text: "Sapper",
                link: "https://sapper.svelte.dev/",
                info:
                  "The next small thing in web development, powered by Svelte",
              },
              {
                text: "Elder.js",
                link: "https://elderguide.com/tech/elderjs/",
                info:
                  "Opinionated static site generator and web framework for Svelte built with SEO in mind.",
              },
            ],
          },
          {
            text: "Mobile",
            info: "UI frameworks for mobile",
            items: [
              {
                text: "Svelte Native",
                link: "https://svelte-native.technology/",
                info: "Svelte controlling native components via Nativescript",
              },
              {
                text: "Framework7",
                link: "https://framework7.io/svelte/",
                info:
                  "Full featured HTML framework for building iOS & Android apps",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    text: "Dev Tools",
    items: [
      {
        text: "Lint",
        info: "Lint and format your code",
        items: [
          {
            text: "eslint-plugin-svelte3",
            link: "https://github.com/sveltejs/eslint-plugin-svelte3",
            info: "An ESLint plugin for Svelte v3 components.",
          },
          {
            text: "prettier-plugin-svelte",
            link: "https://github.com/sveltejs/prettier-plugin-svelte",
            info: "Format your svelte components using prettier.",
          },
          {
            text: "svelte-check",
            link: "https://www.npmjs.com/package/svelte-check",
            info: "Check your code with svelte-check.",
          },
        ],
      },
      {
        text: "Docs",
        info: "Create documentation",
        items: [
          {
            text: "svelte-docs",
            link: "https://github.com/AlexxNB/svelte-docs",
            info:
              "A rapid way to write documentation for your Svelte components",
          },
          {
            text: "sveltedoc-parser",
            link: "https://github.com/alexprey/sveltedoc-parser",
            info: "Generate a JSON documentation for a Svelte component",
          },
        ],
      },
      {
        text: "Test",
        items: [
          {
            text: "svelte-jester",
            link: "https://github.com/mihar-22/svelte-jester",
            info:
              "A Jest transformer for Svelte - compile your components before importing them into tests.",
          },
          {
            text: "@testing-library/svelte",
            link: "https://github.com/testing-library/svelte-testing-library",
            info:
              "🐿️ Simple and complete Svelte DOM testing utilities that encourage good testing practices",
          },
          {
            text: "jest-transform-svelte",
            link: "https://github.com/rspieker/jest-transform-svelte",
            info: "Jest Transformer for Svelte components",
          },
        ],
      },
      {
        text: "Editors",
        info: "Text editor plugins",
        items: [
          {
            text: "Visual Studio Code",
            items: [
              {
                text: "Svelte for VS Code",
                link:
                  "https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode",
                info:
                  "Provides syntax highlighting and rich intellisense for Svelte components",
              },
              {
                text: "Svelte 3 Snippets",
                link:
                  "https://marketplace.visualstudio.com/items?itemName=fivethree.vscode-svelte-snippets",
                info: "Svelte 3 Snippets for VS Code",
              },
            ],
          },
          {
            text: "Atom",
            items: [
              {
                text: "ide-svelte",
                link: "https://atom.io/packages/ide-svelte",
                info:
                  "Provides syntax highlighting and rich intellisense for Svelte components",
              },
              {
                text: "language-svelte",
                link: "https://atom.io/packages/language-svelte",
                info:
                  "Provides syntax highlighting for Svelte Components, directives and other Svelte specific syntax in Atom.",
              },
            ],
          },
          {
            text: "Sublime Text",
            items: [
              {
                text: "Svelte",
                link: "https://packagecontrol.io/packages/Svelte",
                info:
                  "Sublime Text syntax highlighting for Svelte 3 components",
              },
            ],
          },
          {
            text: "Vim",
            items: [
              {
                text: "vim-svelte",
                link: "https://github.com/evanleck/vim-svelte",
                info:
                  "Vim syntax highlighting and indentation for Svelte 3 components.",
              },
              {
                text: "vim-svelte-plugin",
                link: "https://github.com/leafOfTree/vim-svelte-plugin",
                info: "Vim syntax and indent plugin for .svelte files",
              },
              {
                text: "coc-svelte",
                link: "https://github.com/coc-extensions/coc-svelte",
                info: "svelte support for (Neo)Vim",
              },
            ],
          },
          {
            text: "JetBrains",
            items: [
              {
                text: "Svelte",
                link: "https://plugins.jetbrains.com/plugin/12375-svelte",
              },
            ],
          },
        ],
      },
    ],
  },
];
