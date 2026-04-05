import ImunMainClient from "./ImunMainClient";
import { getSiteSettings } from "@/lib/data";

export const metadata = {
    title: "IMPERIAL MUN - SESSION II | IGAC",
    description: "Welcome to Imperial Model United Nations – SESSION II (IMUN II)",
};

export default async function ImunPage() {
    const settings = await getSiteSettings();
    return <ImunMainClient settings={settings} />;
}