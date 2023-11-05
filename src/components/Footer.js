import React from "react";
import Ticker from "react-ticker";
import { Copyright } from "phosphor-react";
const Footer = () => {
  return (
    <Ticker speed={20} direction="toLeft" mode="smooth">
      {({ index }) => (
        <>
          <p style={{ color: "#8f8f8f" }}>
            <Copyright size={16} color="#fff" weight="thin" />
            Shatakshi Saxena in 2023
          </p>
        </>
      )}
    </Ticker>
  );
};

export default Footer;
