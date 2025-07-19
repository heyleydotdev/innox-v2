"use server";

import z from "zod";

import { ConfigPackageTitles } from "~/lib/configs/packages";

const cta_schema = z.object({ email: z.email("Invalid email address") });

export async function cta_action(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _: any,
  formdata: FormData,
): Promise<{ success?: boolean; error?: string }> {
  try {
    const { data, success, error } = cta_schema.safeParse(
      Object.fromEntries(formdata.entries()),
    );

    if (!success) {
      return {
        error: z.treeifyError(error).errors[0] ?? "Something went wrong!",
      };
    }

    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: parseInt(process.env.TG_GROUP_ID!),
          reply_to_message_id: parseInt(process.env.TG_GROUP_TOPIC!),
          parse_mode: "markdown",
          text: `
_New Get Started_
      
*Email address:* ${data.email}
`.trim(),
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    return { success: true };
  } catch (error) {
    console.error("❌ Error [package_signup_action]:", error);

    return { error: "Something went wrong!" };
  }
}

const package_schema = z.object({
  package: z.enum(ConfigPackageTitles),
  email: z.email("Invalid email address"),
});

export async function package_signup_action(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _: any,
  formdata: FormData,
): Promise<{ success?: boolean; error?: string }> {
  try {
    const { data, success, error } = package_schema.safeParse(
      Object.fromEntries(formdata.entries()),
    );

    if (!success) {
      return {
        error: z.treeifyError(error).errors[0] ?? "Something went wrong!",
      };
    }

    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: parseInt(process.env.TG_GROUP_ID!),
          reply_to_message_id: parseInt(process.env.TG_GROUP_TOPIC!),
          parse_mode: "markdown",
          text: `
_New Package Signup_
        
*Package:* ${data.package}
*Email address:* ${data.email}
`.trim(),
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    return { success: true };
  } catch (error) {
    console.error("❌ Error [package_signup_action]:", error);

    return { error: "Something went wrong!" };
  }
}
