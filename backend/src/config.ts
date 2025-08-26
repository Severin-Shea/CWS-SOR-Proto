import 'dotenv/config';

export const config = {
  port: Number(process.env.PORT ?? 4000),
  databaseUrl: process.env.DATABASE_URL ?? 'postgres://postgres:postgres@localhost:5432/sor',
  llm: {
    baseUrl: process.env.LLM_BASE_URL ?? 'https://api.openai.com/v1',
    apiKey: process.env.LLM_API_KEY ?? '',
    modelChat: process.env.LLM_MODEL_CHAT ?? 'gpt-4o-mini'
  },
  storageDir: process.env.STORAGE_DIR ?? './.artifacts'
};