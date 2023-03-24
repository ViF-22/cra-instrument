import React from "react";
import { styles } from "../styles";

export default function NotReady({ bg }) {
  return (
    <div
      className={` w-full bg-${bg} text-center flex items-center justify-center h-[60vh]`}
    >
      <h2 className={`${styles.heading2}`}>
        We're still doing this page.
        <br />
        Come back a bit later!
      </h2>
    </div>
  );
}
