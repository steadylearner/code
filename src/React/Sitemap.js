import React from "react";

const Sitemap = ({
  title = "Steadylearner",
  description = "Steadylearner Website",
  image = "https://avatars0.githubusercontent.com/u/32325099?s=460&v=4",
}) => () => () => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="thumbnail" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Steadylearner" />
      <meta property="og:url" content="https://steadylearner.com/" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="www.steadylearner.com" />
      <meta name="twitter:creator" content="@steadylearner_p" />
    </>
  );
};

export {
  Sitemap,
}
