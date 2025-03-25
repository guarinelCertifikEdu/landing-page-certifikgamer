import Link from 'next/link';

import { ChevronRight, Check } from 'lucide-react';

import { PlusSigns } from '../icons/plus-signs';

import { Button } from '@/components/ui/button';

export default function LaunchPricing() {
  return (
    <section
      id="launch-today"
      className="text-background py-16 md:container md:max-w-5xl md:py-28 lg:py-32"
    >
      <div className="from-primary-900 to-primary/90 divide-background/20 relative isolate container grid items-center overflow-hidden bg-linear-to-r py-8 max-lg:gap-10 max-md:gap-6 md:rounded-3xl lg:grid-cols-2 lg:divide-x lg:px-8">
        <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_left,black_50%,transparent_100%)]">
          <PlusSigns className="text-background/[0.05] h-full w-full" />
        </div>
        <div className="lg:py-16 lg:pr-20">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Comece hoje
          </h2>
          <p className="text-background/70 mt-3 text-sm font-medium">
            Suas conquistas nos games merecem ser reconhecidas. Com nossa plataforma, você valida suas habilidades, conquista certificações e ganha visibilidade real no mercado gamer e profissional.
            Chega de jogar no escuro — destaque-se com dados, estatísticas e reconhecimento.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 max-md:hidden">
            <Button size="lg" variant="secondary" className="group" asChild>
              <Link href="/signup">
                Criar perfil
                <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-6 lg:py-10 lg:pl-20">
          <div>
            <h3 className="text-background text-3xl font-semibold md:text-4xl lg:text-5xl">
              Gamer PRO
            </h3>
            <p className="text-background/70 mt-1 text-xl font-medium">
              Plano gratuito + recursos avançados sob consulta
            </p>
          </div>
          <ul className="text-background/70 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Check className="size-4" />
              Certificações automáticas
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-4" />
              Dashboard de estatísticas
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-4" />
              Compartilhamento com empresas e equipes
            </li>
          </ul>
          <div className="mt-10 flex flex-wrap gap-4 md:hidden">
            <Button size="lg" variant="secondary" className="group w-full">
              <Link href="/signup" className="flex items-center gap-2">
                Criar perfil gratuito
                <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button size="lg" className="group bg-secondary-foreground w-full">
              <Link href="/contact" className="flex items-center gap-2">
                Falar com a equipe
                <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
