import { NextResponse } from "next/server";

export const revalidate = 86400; // Revalidate every 24 hours (1 day)

export async function GET() {
  try {
    const res = await fetch(process.env.MEDIUM_FEED_URL!, {
      next: { revalidate: 86400 }, // Cache the feed for 24 hours
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch Medium feed: ${res.statusText}`);
    }

    const xml = await res.text();

    const posts: any[] = [];
    const itemMatches = xml.match(/<item>([\s\S]*?)<\/item>/g);

    if (itemMatches) {
      itemMatches.forEach((itemXml, idx) => {
        // Extract Title (strip CDATA if present)
        const titleMatch = itemXml.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/);
        const title = titleMatch ? titleMatch[1].trim() : "";

        // Extract Link
        const linkMatch = itemXml.match(/<link>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/link>/);
        const link = linkMatch ? linkMatch[1].trim() : "";

        // Extract PubDate
        const pubDateMatch = itemXml.match(/<pubDate>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/pubDate>/);
        const pubDate = pubDateMatch ? pubDateMatch[1].trim() : "";

        // Extract Guid
        const guidMatch = itemXml.match(/<guid[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/guid>/);
        const guid = guidMatch ? guidMatch[1].trim() : String(idx);

        // Extract Categories/Tags (strip CDATA)
        const categoryRegex = /<category>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/category>/g;
        const tags: string[] = [];
        let catMatch;
        while ((catMatch = categoryRegex.exec(itemXml)) !== null) {
          if (catMatch[1]) {
            tags.push(catMatch[1].trim());
          }
        }

        const excerpt = `Read "${title}" on Medium.`;

        let date = "Recent";
        if (pubDate) {
          try {
            const parsedDate = new Date(pubDate);
            if (!isNaN(parsedDate.getTime())) {
              date = parsedDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });
            }
          } catch (_) {}
        }

        posts.push({
          id: guid,
          title,
          excerpt,
          date,
          link,
          tags: tags.length > 0 ? tags.slice(0, 5) : ["Engineering", "Medium"],
        });
      });
    }

    return NextResponse.json(posts);
  } catch (error: any) {
    console.error("Error in blog route:", error);
    return NextResponse.json({ error: error.message || "Failed to fetch blogs" }, { status: 500 });
  }
}

