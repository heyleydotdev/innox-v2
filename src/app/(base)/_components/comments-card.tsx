"use client";

import type { ConfigComments } from "~/lib/configs/comments";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { config_comments } from "~/lib/configs/comments";
import { cn } from "~/lib/utils";

export const CommentsContainer: React.FC<
  React.ComponentPropsWithRef<"div">
> = ({ children, className, ...rest }) => {
  return (
    <div className={cn("relative", className)} {...rest}>
      {children}
    </div>
  );
};

export interface CommentsProps {
  init_comments: Array<ConfigComments[number]>;
}

export const Comments: React.FC<CommentsProps> = ({ init_comments }) => {
  const perPage = 6;
  const totalPages = Math.ceil(config_comments.length / perPage);
  const currentPage = useRef<number>(1);
  const lastPerformance = useRef<number>(performance.now());

  const [comments, setComments] =
    useState<CommentsProps["init_comments"]>(init_comments);

  const _ref: React.RefCallback<HTMLDivElement> = (e) => {
    if (!e) return;

    let frame: number = 0;

    const rotate: FrameRequestCallback = (now) => {
      if (now - lastPerformance.current >= 10000) {
        currentPage.current = (currentPage.current + 1) % totalPages;
        const offset = currentPage.current * perPage;
        setComments(config_comments.slice(offset, offset + perPage));
        lastPerformance.current = now;
      }
      frame = requestAnimationFrame(rotate);
    };

    frame = requestAnimationFrame(rotate);

    return () => {
      cancelAnimationFrame(frame);
    };
  };

  return (
    <div
      ref={_ref}
      className="grid grid-cols-1 divide-x divide-y border-x border-t bg-stone-50 md:grid-cols-2 lg:grid-cols-3"
    >
      {comments.map((item, index) => (
        <div
          key={index}
          className="xs:p-8 cursor-default p-6 hover:bg-white max-lg:nth-[2n]:border-r-0 max-md:border-r-0 md:nth-last-[-n+2]:border-b-0 lg:nth-[3n]:border-r-0 lg:nth-last-[-n+3]:border-b-0"
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={item.name}
              className="flex size-full origin-center transform-gpu flex-col gap-6 will-change-transform"
              initial={{ opacity: 0.2, scale: 0.9, filter: "blur(5px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0)" }}
              exit={{ opacity: 0.2, scale: 0.9, filter: "blur(5px)" }}
              transition={{
                type: "spring",
                bounce: 0,
                delay: index * 0.03,
                duration: 0.3,
              }}
            >
              <p className="min-h-[4lh] flex-1 text-sm/6 text-balance">
                {item.testimonial}
              </p>
              <div className="flex items-center gap-3">
                <p className="text-sm/6 text-stone-700">{item.name}</p>
                <div className="bg-border h-px flex-1" />
                <p className="text-xs/6 text-stone-500">{item.date}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
