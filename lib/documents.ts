import fs from "node:fs";
import path from "node:path";

/** Server-only: true if a file referenced as a /public URL path actually exists. */
export function publicFileExists(urlPath: string): boolean {
  if (!urlPath) return false;
  return fs.existsSync(path.join(process.cwd(), "public", urlPath));
}
