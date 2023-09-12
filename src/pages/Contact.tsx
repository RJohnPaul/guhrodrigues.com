import { useEffect } from "react";

import { AnimateEnter } from "@/components/utils/AnimateEnter";
import { ContactContent } from "@/components/content/ContactContent";
import { Toast } from "@/components/utils/Toast";

export function Contact({ title }) {
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <>
      <article className="w-full min-h-[calc(100vh_-_85px)] flex items-center py-20">
        <AnimateEnter className="gap-8 py-9">
          <ContactContent />
        </AnimateEnter>
      </article>

      <Toast />
    </>
  );
}
