import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nixerlexfoundation.org",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://nixerlexfoundation.org/about-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://nixerlexfoundation.org/what-we-do",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://nixerlexfoundation.org/get-involved",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://nixerlexfoundation.org/shop",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.25,
    },
  ];
}
