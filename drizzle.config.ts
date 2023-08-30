import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';


dotenv.config({ path: '.env.local' })


export default {
  schema: "./schemas/*",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  }

} satisfies Config;
