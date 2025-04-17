import { sql } from './sql.js'




await sql`
    CREATE TABLE IF NOT EXISTS videos (
        title TEXT,
        description TEXT,
        duration INTEGER
    );
`

