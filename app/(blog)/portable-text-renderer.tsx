import React from "react";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/urlFor"; // Adjust the path based on your project structure

const PortableTextRenderer = ({ value }: { value: any }) => {
  const components = {
    types: {
      image: ({ value }: { value: any }) => {
        if (!value?.asset?._ref) {
          return null; // Skip rendering if no image asset is available
        }
        return (
          <img
            src={urlFor(value).width(800).url()} // Generate the image URL
            alt={value.alt || "Image"}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        );
      },
    },
  };

  return <PortableText value={value} components={components} />;
};

export default PortableTextRenderer;