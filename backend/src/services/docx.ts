import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '../config.js';

/** Placeholder DOCX generation: writes JSON payload into a .docx file for demo purposes. */
export async function renderDocx(composeId: string, sorJson: any): Promise<string> {
  const dir = config.storageDir;
  await fs.mkdir(dir, { recursive: true });
  const out = path.join(dir, `sor_${composeId}.docx`);
  await fs.writeFile(out, Buffer.from(`SOR JSON (placeholder)\n\n${JSON.stringify(sorJson, null, 2)}`));
  return out;
}