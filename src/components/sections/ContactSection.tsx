import { SectionProps } from "@/types";

export default function ContactSection({ children }: SectionProps) {
    return (
        <section className="w-full sm:h-full sm:min-h-[calc(100vh_-_85px)] p-2 flex items-center py-16">
            {children}
        </section>
    );
}
