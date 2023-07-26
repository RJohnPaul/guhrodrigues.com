import { SectionProps } from "@/types";

export default function NotFoundSection({ children }: SectionProps) {
    return (
        <section className="w-full relative h-[90vh] flex text-center items-center justify-center">
            {children}
        </section>
    );
}
