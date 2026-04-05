import ScheduleClient from "./ScheduleClient";
import { getSiteSettings } from "@/lib/data";

export const metadata = {
    title: "Schedule | Imperial MUN Session II",
    description: "Two days of high-velocity diplomacy and prestigious networking.",
};

export default async function SchedulePage() {
    const settings = await getSiteSettings();
    return <ScheduleClient settings={settings} />;
}