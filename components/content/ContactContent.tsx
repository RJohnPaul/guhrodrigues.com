import { FormComponent } from '@/components/ui/FormComponent'
import { Title } from '../utils/Title'
import { Typography } from '@/components/utils/Typography'

export function ContactContent() {
  return (
    <>
      <div className="mb-8 space-y-4">
        <Title variant="title">Mande um email, como nos velhos tempos</Title>
        <Typography size="sm" className="leading-loose">
          <span className="text-primary font-medium">
            Gosto muito de interagir
          </span>{' '}
          com programadores, criadores e estudantes da tecnologia. Caso se
          interessou pelo meu trabalho ou queira{' '}
          <span className="text-primary font-medium">dar um feedback</span>{' '}
          sobre este website, vamos{' '}
          <span className="text-primary font-medium">trocar um papo</span>.
        </Typography>
      </div>

      <FormComponent />
    </>
  )
}
