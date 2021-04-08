import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ meta }) => {
  return (
    <Helmet>
      {meta.map((item, i) => (
        <meta
          key={i.toString()}
          property={item.property}
          content={item.content}
        ></meta>
      ))}
    </Helmet>
  );
};

export default SEO;
