import Image from 'next/image';

import { PlusSigns } from '@/components/icons/plus-signs';
import JoinUs from '@/components/sections/join-us';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative container max-w-5xl py-10 md:py-12 lg:py-15">
        <div className="">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Transformando Gamers
            <br />
            em Profissionais.
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-2xl md:text-3xl">
            Nossa missão é dar visibilidade à sua jornada como gamer, validando suas conquistas, habilidades e experiências com certificações reconhecidas.
          </p>
        </div>
        {/* Background decoration */}
        <>
          <div className="absolute inset-0 z-[-1] -translate-y-1/2 blur-[100px] will-change-transform">
            <div className="bg-primary-gradient/25 absolute top-0 right-0 h-[400px] w-[800px] -translate-x-1/5 rounded-full" />
            <div className="bg-secondary-gradient/10 absolute top-0 right-0 size-[400px] rounded-full" />
          </div>
          <div className="absolute -inset-40 z-[-1] [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_80%)]">
            <PlusSigns className="text-foreground/[0.05] h-full w-full" />
          </div>
        </>
      </section>

      {/* Missão Section */}
      <section className="container max-w-5xl py-10 md:py-12 lg:py-15">
        <div className="max-w-2xl space-y-5 md:space-y-8 lg:space-y-10">
          <p className="text-lg">
            O mundo dos games é muito mais do que diversão. É estratégia, trabalho em equipe, liderança e performance. Chegou a hora de reconhecer isso.
          </p>

          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            Certificações para quem joga sério.
          </h2>
          <p className="text-lg">
            A maioria dos jogadores ainda não tem uma forma clara de mostrar sua evolução e conquistas. Com nossa plataforma, você valida suas habilidades, registra seu histórico e se conecta com oportunidades profissionais no universo gamer.
          </p>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="my-5 pb-10 md:my-8 md:pb-12 lg:my-12 lg:pb-15">
        <Carousel
          opts={{
            align: 'start',
          }}
        >
          <CarouselContent className="-ml-4">
            <CarouselItem className="basis-[80%] lg:basis-1/3 xl:basis-[40%]">
              <div className="relative h-[330px] lg:h-[440px] xl:h-[600px]">
                <Image
                  src="/images/about/4.webp"
                  alt="Jogador analisando estatísticas"
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-[80%] lg:basis-1/3 xl:basis-[40%]">
              <div className="relative h-[330px] lg:h-[440px] xl:h-[600px]">
                <Image
                  src="/images/about/2.webp"
                  alt="Ambiente gamer profissional"
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-[80%] lg:basis-1/3 xl:basis-[40%]">
              <div className="relative h-[330px] lg:h-[440px] xl:h-[600px]">
                <Image
                  src="/images/about/3.webp"
                  alt="Comunidade gamer conectada"
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Nossa História */}
      <section className="container">
        <div className="mr-0 ml-auto max-w-2xl space-y-5 md:space-y-8 lg:space-y-10">
          <p className="text-lg">
            Criamos nossa plataforma com o propósito de valorizar o esforço, a dedicação e o talento dos gamers. Queremos mostrar para o mundo que jogar é sim uma habilidade poderosa.
          </p>

          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            Somos apaixonados por games e tecnologia.
          </h2>
          <p className="text-lg">
            Nossa equipe é formada por especialistas em jogos, educação e desenvolvimento de software. Acreditamos que todo gamer merece reconhecimento — e estamos aqui para fazer isso acontecer.
          </p>
        </div>
      </section>

      <JoinUs />
    </>
  );
}
