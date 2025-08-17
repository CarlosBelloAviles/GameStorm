import { Suspense } from "react";

export const lazySuspense = (Component) => (
    <Suspense fallback= {<div className="loadingContainer"><span className="loader"></span></div>}>
      <Component />
    </Suspense>
  );