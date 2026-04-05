import CommitteesClient from "./CommitteesClient";
import { getSiteSettings } from "@/lib/data";

export const metadata = {
    title: "Committees | Imperial MUN Session II",
    description: "Explore the councils and diplomatic forums of IMUN Session II.",
};

export default async function CommitteesPage() {
    const settings = await getSiteSettings();
    return <CommitteesClient settings={settings} />;
}