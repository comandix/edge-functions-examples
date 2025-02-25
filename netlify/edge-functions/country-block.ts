import { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  // Here's what's available on context.geo

  // context: {
  //   geo: {
  //     city?: string;
  //     country?: {
  //       code?: string;
  //       name?: string;
  //     },
  //     subdivision?: {
  //       code?: string;
  //       name?: string;
  //     },
  //   }
  // }

  const BLOCKED_COUNTRY_CODE = "GB";
  const countryCode = context.geo?.country?.code || "US";
  const countryName = context.geo?.country?.name || "United States of America";

  if (countryCode === BLOCKED_COUNTRY_CODE) {
    return new Response(`We're sorry, you can't access our content from ${countryName}!`, {
      headers: { "content-type": "text/html" },
      status: 451,
    });
  }

  return new Response(`Hello again! You can freely access our content from ${countryName}!`, {
    headers: { "content-type": "text/html" },
  });
};
