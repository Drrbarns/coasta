import type { MetadataRoute } from "next";
import { siteMeta } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteMeta.name,
    short_name: siteMeta.name,
    description: siteMeta.description,
    start_url: "/",
    display: "standalone",
    background_color: "#004d2c",
    theme_color: "#004d2c",
    icons: [
      {
        src: "/site-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
