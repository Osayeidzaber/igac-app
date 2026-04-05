import { ImunNavbar, ImunFooter } from "@/components/layout/imun-layout";

export default function ImunLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[#111111] text-[#f2c45f]">
            <ImunNavbar />
            <div className="pt-20">
                {children}
            </div>
            <ImunFooter />
        </div>
    );
}
