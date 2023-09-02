import FormComponent from "@/components/ui/FormComponent";

export default function ContactContent() {
  return (
    <>
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-title">
          Mande um email, como nos velhos tempos
        </h1>
        <p className="text-foreground">
          Caso se interessou pelo meu trabalho ou queira{" "}
          <span className="text-primary font-medium">dar um feedback</span>{" "}
          sobre este website, vamos{" "}
          <span className="text-primary font-medium">trocar um papo</span>.
        </p>
      </div>

      <FormComponent />
    </>
  );
}
