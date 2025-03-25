'use client';

import { useState } from 'react';

import Image from 'next/image';

import { PlusSigns } from '../icons/plus-signs';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FEATURES = [
  {
    id: 'player-certification',
    title: 'Certificações Automáticas de Habilidades',
    description:
      'A partir do seu desempenho em jogos, nossa plataforma identifica e valida suas habilidades — como liderança, estratégia e cooperação — emitindo certificações reconhecidas automaticamente.',
    image: '/images/homepage/new2.webp',
  },
  {
    id: 'cloud-secure',
    title: 'Segurança e Escalabilidade na Nuvem',
    description:
      'Utilizamos uma infraestrutura robusta na AWS para garantir que seus dados estejam sempre protegidos, com performance ideal para milhões de jogadores e empresas ao redor do mundo.',
    image: '/images/homepage/automacao-wide.webp',
  },
  {
    id: 'custom-reports',
    title: 'Estatísticas e Relatórios Personalizados',
    description:
      'Tenha acesso fácil ao seu histórico de partidas, conquistas e evolução. Exporte ou compartilhe relatórios completos com recrutadores, times e plataformas parceiras.',
    image: '/images/homepage/new23.webp',
  },
];

export default function CodeSecurity() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      id="code-security"
      className="container max-w-5xl py-16 md:py-28 lg:py-32"
    >
      <div className="from-primary-gradient/20 relative overflow-hidden rounded-3xl border bg-linear-to-bl to-transparent py-5 md:py-6 lg:py-8">
        <div className="absolute inset-0 z-[-1]">
          <PlusSigns className="text-foreground/[0.05] h-full w-full" />
        </div>
        <div className="md:px-6 lg:px-8">
          <div className="max-md:px-5">
            <h3 className="mini-title">PORQUE CertifkGamer?</h3>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Eficiência
            </h2>
          </div>
          <div className="mt-10 flex gap-12 overflow-hidden max-md:flex-col md:mt-16 lg:mt-20">
            <Accordion
              type="single"
              className="flex-1"
              defaultValue="0"
              onValueChange={(value) => setSelectedIndex(Number(value))}
            >
              {FEATURES.map((feature, index) => (
                <AccordionItem
                  key={feature.id}
                  value={index.toString()}
                  className="border-black/20 dark:border-white/20"
                >
                  <AccordionTrigger className="hover:no-underline max-md:px-5">
                    <h3 className="text-input font-inter text-xl font-bold">
                      {feature.title}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="">
                    <p className="text-muted-foreground leading-relaxed font-medium max-md:px-5">
                      {feature.description}
                    </p>
                    <div className="relative mt-4 h-[280px] translate-x-5 md:hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="rounded-2xl object-cover object-left-top shadow-xl"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="relative h-[320px] max-md:hidden max-md:translate-x-6 md:flex-1">
              <Image
                src={FEATURES[selectedIndex].image}
                alt={FEATURES[selectedIndex].title}
                fill
                className="rounded-2xl object-cover object-left-top shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
