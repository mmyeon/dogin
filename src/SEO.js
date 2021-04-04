import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SEO = ({ meta }) => {
  return (
    <HelmetProvider>
      <Helmet>
        {meta.map((item, i) => (
          <meta
            key={i.toString()}
            property={item.property}
            content={item.content}
          ></meta>
        ))}
      </Helmet>
    </HelmetProvider>
  );
};

export default SEO;
