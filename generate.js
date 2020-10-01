const fs = require("fs");
const md = require("json2md");
const remark = require("remark");
const github = require('remark-github')
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
      if (resource.info) output.push({ p: `_${resource.info}_` });
      if (resource.items[0].link) {
        output.push({ list: process(resource.items) });
      } else {
        output.push(...process(resource.items, depth + 1));
      }
    }
  }
  return output;
}
const header = `![](./awesome-svelte.svg "Awesome svelte")

## Awesome Svelte [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> ⚡ A curated list of awesome Svelte resources

`;

const footer = `
* * *

![](https://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")
`;
const file = md([
  { h2: "Table Of Contents" },
  ...process(resources),
  
]);

remark()
  .use(github)
  .use(toc, { tight: true })
  .process(file, (err, content) => {
    if (err) throw err;
    fs.writeFileSync("README.md", String(header+content+footer));
  });
