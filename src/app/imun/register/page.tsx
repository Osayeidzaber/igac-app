import { getSiteSettings } from "@/lib/data";
import ImunRegisterClient from "./ImunRegisterClient";

export const metadata = {
    title: "Registration | Imperial MUN - Session II",
    description: "Official registration portal for Imperial Model United Nations – Session II",
};

export default async function ImunRegisterPage() {
    const settings = await getSiteSettings();
    return <ImunRegisterClient settings={settings} />;
}