import { SectionProps } from "@/models/section";

export default function AboutSection({ children }: SectionProps) {
    return (
        <section className="w-full lg:h-full lg:min-h-[calc(100vh_-_85px)] p-2 flex items-center py-16">
            {children}
        </section>
    );
}
