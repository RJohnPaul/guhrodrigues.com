import Link from "next/link";

export function ContactButton() {
  return (
    <Link href="/contact" className="w-fit">
      <button className="group relative grid overflow-hidden rounded-lg px-4 py-3.5 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset]">
        <span>
          <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-lg duration-300 [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
        </span>
        <span className="backdrop absolute inset-[1px] rounded-lg bg-neutral-700 duration-300 group-hover:bg-neutral-600" />
        <span className="z-10 text-sm font-medium text-primary">
          Contate-me
        </span>
      </button>
    </Link>
  );
}
