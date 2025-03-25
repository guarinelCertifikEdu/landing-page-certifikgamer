import { PlusSigns } from '@/components/icons/plus-signs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  return (
    <section className="relative py-16 md:py-28 lg:py-32">
      <div className="container max-w-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Agende uma demonstração
          </h1>
          <p className="text-muted-foreground mt-4 text-2xl md:text-3xl">
            Entenda como a CertifikGamer pode auxiliar a sua empresa
          </p>
        </div>

        <form className="mt-8 space-y-5 md:mt-12 lg:mt-20">
          {/* First Name */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="firstName">Primeiro nome</Label>
            <Input id="firstName" placeholder="Digite o seu primeiro nome" />
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="lastName">Sobrenome</Label>
            <Input id="lastName" placeholder="Digite o seu sobrenome" />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Digite o seu endereço de email"
            />
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="company">
              Nome da Empresa{' '}
              <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Input id="company" placeholder="Digite o nome da sua empresa" />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="employees">Número de funcionários</Label>
            <Input
              id="employees"
              placeholder="Digite a quantidade de funcionários"
              type="number"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              rows={5}
              placeholder="Digite a sua mensagem"
              className="resize-none"
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit" size="lg">
              Enviar
            </Button>
          </div>
        </form>
      </div>
      <div className="absolute -inset-40 z-[-1] [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_75%)]">
        <PlusSigns className="text-foreground/[0.05] h-full w-full" />
      </div>
    </section>
  );
}
