import type { Metadata } from "next";

import Image from "next/image";

import {
  Section,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionSeparator,
  SectionTitle,
} from "~/app/(base)/_components/section";
import posts from "~/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  alternates: {
    canonical: "/posts",
  },
};

export default async function PostsPage() {
  return (
    <div className="relative">
      <h1 className="sr-only">Blog</h1>
      <Section>
        <SectionSeparator title="Posts" className="[&>div]:border-t-0" />
        <SectionContainer>
          <SectionContent>
            <SectionHeader>
              <SectionTitle>Things Worth Sharing</SectionTitle>
              <SectionDescription>
                We read, build, and mess around a lot. Every now and then, we
                write about it here.
              </SectionDescription>
            </SectionHeader>
          </SectionContent>
          <div
            className="group/container grid grid-cols-1 border-x border-t [--gutter:--spacing(4)] md:grid-cols-2 md:[--gutter:--spacing(5)]"
            data-odd={posts.length % 2 ? "true" : "false"}
          >
            {posts.map((post) => (
              <div
                key={post.key}
                className="border-b last:border-b-0 group-data-[odd=true]/container:nth-last-[2]:border-b-0 md:odd:border-r md:nth-last-[2]:border-b-0"
              >
                <div className="p-(--gutter) pb-0">
                  <a
                    href={post.url}
                    className="after:ring-border relative block aspect-video after:pointer-events-none after:absolute after:inset-0 after:ring-1 after:ring-inset"
                    target="_blank"
                  >
                    <Image
                      className="object-cover object-center transition-[filter] duration-500 will-change-[filter] hover:grayscale-100"
                      src={post.thumbnail}
                      fill
                      alt={post.title}
                      {...(post.blur_data && {
                        placeholder: "blur",
                        blurDataURL: post.blur_data,
                      })}
                    />
                  </a>
                </div>
                <div className="p-(--gutter)">
                  <h3 className="font-medium text-balance max-md:text-sm/6">
                    <a
                      className="hover:text-amber-500"
                      href={post.url}
                      target="_blank"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm/6 text-balance text-stone-600">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="hidden p-(--gutter) md:group-data-[odd=true]/container:block">
              <div className="bg-empty border-border/50 size-full border bg-stone-50" />
            </div>
          </div>
        </SectionContainer>
      </Section>
    </div>
  );
}
