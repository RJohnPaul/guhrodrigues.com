import author from "@/assets/images/author.jpeg";

import Biography from "@/components/utils/Biography";
import DownloadButton from "@/components/ui/DownloadButton";

export default function AboutContent() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Sobre mim</h1>
      </div>
      <div className="flex sm:flex-col lg:flex-row justify-between gap-16">
        <figure className="lg:order-2">
          <img
            src={author}
            loading="lazy"
            className="rounded-lg w-[350px] lg:w-[700px]"
            alt="Gustavo"
          />
        </figure>
        <div className="flex items-start flex-col lg:mt-0 gap-4 sm:px-1 lg:px-0">
          <Biography />

          <DownloadButton />
        </div>
      </div>
    </>
  );
}
