const fs = require("fs");
const md = require("json2md");
const remark = require("remark");
const toc = require("remark-toc");
const resources = require("./index");

const format = (input) => {
  let output = `[${input.text}](${input.link})`;
  if (input.info) output += ` – ${input.info}`;
  return output;
};

md.converters.list = (input) =>
  input.map(({ resource }) => `- ${format(resource)}`).join("\n");

function process(data, depth = 1) {
  const output = [];
  for (let resource of data) {
    if (resource.link) {
      output.push({ resource });
    } else {
      output.push(Object.fromEntries([[`h${depth + 1}`, resource.text]]));
      if (resource.items[0].link) {
        output.push({ list: process(resource.items) });
      } else {
        output.push(...process(resource.items, depth + 1));
      }
    }
  }
  return output;
}

const file = md([
  { h1: "Awesome Svelte" },
  {
    img: {
      title: "Awesome Svelte",
      source:
        "https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg",
    },
  },
  { blockquote: "⚡ A curated list of awesome Svelte resources" },
  { h2: "Table Of Contents" },
  ...process(resources),
  {
    img: {
      title: "CC0",
      source: "https://i.creativecommons.org/p/zero/1.0/88x31.png",
    },
  },
]);

remark()
  .use(toc, { tight: true })
  .process(file, (err, content) => {
    if (err) throw err;
    fs.writeFileSync("README.md", String(content));
  });
