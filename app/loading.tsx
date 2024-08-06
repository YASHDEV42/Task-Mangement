import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <div
      className="min-h-screen w-screen flex justify-center
    items-center animate-pulse text-xl"
    >
      loading...
    </div>
  );
};

export default loading;
