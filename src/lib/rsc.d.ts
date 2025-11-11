// rsc.d.ts
declare module "next-mdx-remote/rsc" {
  import type { ReactNode } from "react";

  export function MDXRemote(props: {
    source: string;
    options?: any;
    components?: Record<string, React.ComponentType>;
  }): ReactNode;
}
