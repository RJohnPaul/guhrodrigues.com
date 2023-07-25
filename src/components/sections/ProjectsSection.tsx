import { SectionProps } from "@/models/section";

export default function ProjectsSection({ children }: SectionProps) {
    return <section className="w-full min-h-screen py-24">{children}</section>;
}
