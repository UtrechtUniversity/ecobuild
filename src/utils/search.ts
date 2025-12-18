import { getCollection } from "astro:content";

export async function getSearchIndex() {
    const rawEntries: any[] = [];

    // Use import.meta.env.BASE_URL which comes from astro.config.mjs
    // Remove trailing slash to avoid double slashes when joining
    const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");

    const allowedCollections = [
        "publications",
        "presentations",
        "partners",
        "team",
        "softwares",
        "activities",
    ] as const;

    for (const collectionName of allowedCollections) {
        // @ts-ignore
        const items = await getCollection(collectionName);

        for (const item of items) {
            const data = item.data;
            const body = item.body || ""; // Raw markdown body if available

            let url = "";
            if (collectionName === "presentations") {
                url = `${BASE_PATH}/publications#presentations`;
            } else if (collectionName === "publications") {
                const type = (data as any).type;
                if (type && (type.includes("newspaper") || type.includes("Newspaper"))) {
                    url = `${BASE_PATH}/publications#newspapers`;
                } else {
                    url = `${BASE_PATH}/publications#papers`;
                }
            } else if (collectionName === "softwares") {
                url = `${BASE_PATH}/publications#softwares`;
            } else if (collectionName === "activities") {
                url = `${BASE_PATH}/activities/${item.id}`;
            } else if (collectionName === "team") {
                url = `${BASE_PATH}/team`; // Team members are usually on the team page, anchored or not
            } else if (collectionName === "partners") {
                // Partners might not have individual pages, but let's link to the list? 
                // For now, let's assume they don't have pages unless we know otherwise. 
                // But search needs a URL. Point to partners page?
                // Assuming there is a partners page or section?
                // The original code tried to construct a slug.
                url = `${BASE_PATH}/${collectionName}/${item.id}`;
            } else {
                url = `${BASE_PATH}/${collectionName}/${item.id}`;
            }

            // Special handling for Team which usually doesn't have individual pages in this template?
            // Checking previous code: it generated `${BASE_PATH}${slug}` or for team: usually just lists.
            // But let's keep the slug based URL for generic items.

            // Specifically for team, the original code fell through to `url = ${BASE_PATH}${slug}`.
            // Slug for content collections is `item.slug` or `item.id`.
            // Using `item.id` is safer for new Content Layer.

            rawEntries.push({
                title: data.title || (data as any).name || "",
                bio: (data as any).bio || "",
                description: data.description || "",
                name: (data as any).name || "",
                role: (data as any).role || "",
                authors: (data as any).authors || "", // Array -> toString?
                webpage: (data as any).website || (data as any).url || (data as any).link || "",
                content: body.replace(/\r?\n/g, " "),
                url,
            });
        }
    }

    return rawEntries;
}
