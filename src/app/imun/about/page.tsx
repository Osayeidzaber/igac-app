import AboutImunClient from "./AboutImunClient";
import { getSiteSettings } from "@/lib/data";

export const metadata = {
    title: "About | Imperial Model United Nations",
    description: "Learn about the legacy, vision, and prestige behind Imperial MUN Session II.",
};

export default async function AboutImunPage() {
    const settings = await getSiteSettings();
    return <AboutImunClient settings={settings} />;
}
