export async function GET() {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      return new Response(
        JSON.stringify({ message: "Failed to fetch data" }),
        { status: 500 }
      );
    }

    const data = await response.json();

    // Return only fields (clean data)
    const records = data.records.map((record) => ({
      id: record.id,
      ...record.fields,
    }));

    return new Response(JSON.stringify(records), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Server error" }),
      { status: 500 }
    );
  }
}
