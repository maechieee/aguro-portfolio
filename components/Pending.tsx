import { ReactNode } from "react";

/** Dashed "to be provided" tile used wherever real content hasn't been supplied yet. */
export function Pending({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-md border border-dashed border-line bg-paper px-3 py-2 font-mono text-xs text-slate">
      {children}
    </p>
  );
}
