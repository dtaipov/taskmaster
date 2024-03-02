import { sql } from "@vercel/postgres";

export default async function Tasks({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from TASK`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          Row: {row.id} - {row.name} - {row.description}
        </div>
      ))}
    </div>
  );
}