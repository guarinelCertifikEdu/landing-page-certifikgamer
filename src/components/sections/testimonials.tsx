'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import { PlusSigns } from '../icons/plus-signs';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "A plataforma mudou minha carreira como jogador. Agora tenho um perfil com estatísticas e certificações que mostram minhas habilidades reais. Já recebi convites de dois times só por ter o perfil ativo!",
    author: 'Lucas “SniperBR” Almeida',
    role: 'Atleta de eSports, Team Rising',
    logo: '/images/logos/ramp.svg',
  },
  {
    id: 2,
    quote:
      "Como recrutador na área gamer, encontrar talentos ficou muito mais fácil. A certificação automatizada e os dashboards ajudam a filtrar perfis com base em performance e comportamento no jogo.",
    author: 'Camila Duarte',
    role: 'Recrutadora de talentos, Gameland',
    logo: '/images/logos/notion.svg',
  },
  {
    id: 3,
    quote:
      "Utilizamos a API da plataforma para importar dados dos nossos jogos diretamente. O sistema reconhece habilidades-chave dos jogadores e gera certificações automaticamente. Isso gera muito valor para nossos usuários.",
    author: 'Felipe Torres',
    role: 'Tech Lead, ArenaX',
    logo: '/images/logos/mercury.svg',
  },
  {
    id: 4,
    quote:
      "Com a plataforma, conseguimos engajar nossa comunidade com recompensas baseadas em conquistas reais. A certificação virou um diferencial para os jogadores mais dedicados.",
    author: 'Joana Ribeiro',
    role: 'Community Manager, Playverse',
    logo: '/images/logos/raycast.svg',
  },
  {
    id: 5,
    quote:
      "O painel de estatísticas é incrível. Acompanhar minha evolução e poder compartilhar com empresas e amigos me ajudou a ser levado mais a sério como gamer profissional.",
    author: 'Rafael “Nexus” Santana',
    role: 'Streamer & Pro Player',
    logo: '/images/logos/asana.svg',
  },
];


export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section
      className="relative"
      aria-label="Customer Testimonials"
    >
      <div className="container max-w-4xl">
        <Carousel
          opts={{
            align: 'center',
            loop: true,
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {TESTIMONIALS.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="flex cursor-grab flex-col gap-6 lg:gap-8"
              >
                <blockquote className="font-hubot-sans pointer-events-none text-2xl leading-relaxed font-semibold tracking-tight text-balance select-none md:text-3xl lg:text-4xl">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-4">
                  {testimonial.logo && (
                    <div className="relative h-8 w-24">
                      <Image
                        src={testimonial.logo}
                        alt={`${testimonial.author}'s company logo`}
                        fill
                        className="object-contain dark:invert"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <div className="bg-border h-8 w-[1px]" aria-hidden="true" />
                  <div>
                    <cite className="font-semibold not-italic">
                      {testimonial.author}
                    </cite>
                    <p className="text-muted-foreground text-sm font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div
          className="mt-10 flex gap-2 lg:mt-16"
          role="tablist"
          aria-label="Testimonials navigation"
        >
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              className={cn(
                'size-4 cursor-pointer rounded-full transition-colors duration-300',
                index === current
                  ? 'bg-muted-foreground'
                  : 'bg-muted-foreground/20 hover:bg-muted-foreground/10',
              )}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-selected={index === current}
              role="tab"
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 top-16 isolate z-[-1] h-[300px] md:top-28 lg:top-32">
        <div className="from-background via-background/40 absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t to-transparent" />
        <div className="from-background via-background/40 absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b to-transparent" />
        <PlusSigns className="text-foreground/[0.05] size-full" />
      </div>
    </section>
  );
}
