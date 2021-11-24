import React from "react";

export default function ErrorDataNotLoaded({ error }) {
  return (
    <div className="p-8">
      <h1 className="text-center text-3xl">{error.status}</h1>
      <p className="text-center text-2xl">{error.data.error}</p>
    </div>
  );
}
