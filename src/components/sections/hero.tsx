import Image from 'next/image';
import Link from 'next/link';

import {
  ChevronRight,
  Wallet,
  Waypoints,
  Building2,
  ArrowLeftRight,
} from 'lucide-react';

import { PlusSigns } from '../icons/plus-signs';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Typewriter from './type-writter';



const features = [
  {
    id: 'var',
    title: 'Dashboard Gamer',
    description: 'Acompanhe sua evolução, conquistas e estatísticas personalizadas em tempo real.',
    icon: Wallet,
    image: '/images/homepage/hero/dashboard.webp',
  },
  {
    id: 'wire',
    title: 'Certificações',
    description: 'Veja todas as certificações disponíveis com base nas suas habilidades e estilo de jogo.',
    icon: Waypoints,
    image: '/images/homepage/hero/regulatorios.png',
  },
  {
    id: 'bank-accounts',
    title: 'Partidas e Desempenho',
    description: 'Monitore o desempenho de cada partida e entenda como você está evoluindo.',
    icon: Building2,
    image: '/images/homepage/hero/envios.jpg',
  },
  {
    id: 'bank-transfers',
    title: 'Conecte sua conta',
    description: 'Conecte sua conta de jogo ou envie arquivos para enriquecer seu perfil de jogador.',
    icon: ArrowLeftRight,
    image: '/images/homepage/hero/uploads.webp',
  },
];

export default function Hero() {
  return (
    <section className="bg-background relative overflow-hidden pt-16 ">
      <div className="relative z-10">
        <div className="container max-w-5xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            <Typewriter text="Raápido. Descomplicado. Gamer de verdade." speed={100} />
          </h1>
          <p className="text-muted-foreground mt-4 text-2xl md:text-3xl">
            Chega de jogar sem reconhecimento. Nossa plataforma transforma seu histórico de partidas em certificações, estatísticas e visibilidade real para empresas e comunidades.
          </p>
          <div className="mt-7">
            <Button asChild size="lg">
              <Link href="/signup">
                Crie seu perfil agora
                <ChevronRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="var" className="mt-8 md:mt-12 lg:mt-20">
          {/* Tab Content */}
          <div className="container">
            {features.map((feature) => (
              <TabsContent
                key={feature.id}
                value={feature.id}
                className="relative aspect-[2.116/1] overflow-hidden"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="translate-y-8 object-contain lg:translate-y-15"
                  priority={true}
                />
              </TabsContent>
            ))}
          </div>

          {/* Tab Triggers */}
          <div className="bg-background pt-12 pb-16 md:pb-28 lg:pb-32">
            <TabsList className="mx-auto flex h-auto max-w-4xl justify-start gap-4 overflow-x-auto bg-transparent max-lg:px-5">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="group ring-secondary-foreground min-w-[200px] flex-1 justify-start rounded-lg px-4 py-3 text-start whitespace-normal transition-colors duration-300 data-[state=active]:bg-transparent data-[state=active]:ring lg:px-6 lg:py-4"
                >
                  <div className="flex flex-col">
                    <div className="bg-muted-foreground/40 group-data-[state=active]:bg-secondary-foreground flex size-8 items-center justify-center rounded-md p-1.5">
                      <feature.icon className="stroke-background" />
                    </div>
                    <h2 className="group-data-[state=active]:text-primary text-foreground mt-2 text-lg font-bold">
                      {feature.title}
                    </h2>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 aspect-square [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_75%)]">
        <PlusSigns className="text-foreground/[0.05] h-full w-full" />
      </div>
      <div className="">
        {/* will-change-transform improves performance on scroll on safari because of the high blur */}
        <div className="bg-primary-gradient/11 absolute inset-x-[0%] bottom-0 left-0 h-[500px] rounded-full blur-[100px] will-change-transform md:h-[950px]" />
        <div className="bg-secondary-gradient/9 absolute inset-x-[30%] right-0 bottom-0 h-[500px] rounded-full blur-[100px] will-change-transform md:h-[950px]" />
      </div>
    </section>
  );
}
