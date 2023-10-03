import { PageDescription } from '@/components/utils/PageDescription'
import { FormComponent } from '@/components/ui/FormComponent'

export function ContactContent() {
  return (
    <>
      <PageDescription
        title="Mande um email, como nos velhos tempos."
        description="Gosto muito de interagir com programadores, criadores e estudantes da tecnologia. Caso se
	interessou pelo meu trabalho ou queira dar um feedback sobre este website, vamos trocar um papo."
      />

      <FormComponent />
    </>
  )
}
