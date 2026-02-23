"use client";

import * as runtime from "react/jsx-runtime";
import { useMemo } from "react";

interface MDXContentProps {
  code: string;
}

// Velite outputs MDX as compiled JavaScript code strings
// This component evaluates and renders them
export function MDXContent({ code }: MDXContentProps) {
  const Component = useMemo(() => {
    try {
      const fn = new Function("_jsx_runtime", code);
      const mod = fn(runtime);
      return mod.default || mod;
    } catch {
      return () => null;
    }
  }, [code]);

  return (
    <div className="prose-custom">
      <Component />
    </div>
  );
}
