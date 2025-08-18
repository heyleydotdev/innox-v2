import fs from "fs/promises";
import path from "path";

import sharp from "sharp";
import z from "zod";

export const $schema_posts = z.object({
  key: z.string().min(1),
  url: z.url(),
  title: z.string().min(2).max(256),
  description: z.string().min(24).max(512),
  thumbnail: z.url(),
  published: z.string().transform((s) => new Date(s)),
  blur_data: z.string().min(1).startsWith("data:image/"),
});

const lib_posts = path.join(process.cwd(), "src/lib/posts.ts");

export const getPosts = async () => {
  const path = await import("path");
  const fs = await import("fs/promises");

  const directory = path.join(process.cwd(), "src/posts");
  const files = await fs
    .readdir(directory)
    .then((_files) =>
      _files.filter((file_name) => file_name.endsWith(".json")),
    );

  return Promise.all(
    files
      .map(async (_file) => {
        const key = path.parse(_file).name;
        const file_path = path.join(directory, _file);
        const content = await fs.readFile(file_path, "utf-8");
        const json = JSON.parse(content);
        const data = $schema_posts
          .omit({ blur_data: true })
          .safeParse({ key, ...json });

        return data.success ? data.data : undefined;
      })
      .filter((data): data is Promise<z.infer<typeof $schema_posts>> => !!data),
  ).then((data) =>
    data.sort((a, b) => b.published.getTime() - a.published.getTime()),
  );
};

async function main() {
  const posts = await getPosts();

  const _posts: z.infer<typeof $schema_posts>[] = [];
  for (const post of posts) {
    const response = await fetch(post.thumbnail, { method: "GET" });
    const array_buffer = await response.arrayBuffer();
    const buffer = Buffer.from(array_buffer);
    const metadata = await sharp(buffer).metadata();

    const blur_buffer = await sharp(buffer)
      .resize(
        Math.round(Math.max((metadata.height / metadata.width) * 8, 1)),
        undefined,
        { withoutEnlargement: true },
      )
      .webp({ quality: 70 })
      .toBuffer();

    const blur_data = $schema_posts.pick({ blur_data: true }).safeParse({
      ...post,
      blur_data: `data:image/webp;base64,${blur_buffer.toString("base64")}`,
    });

    if (blur_data.success) {
      _posts.push({ ...post, ...blur_data.data });
    }
  }

  const content =
    "const posts = " + JSON.stringify(_posts) + "; export default posts";

  await fs.writeFile(lib_posts, content);
}

main();
