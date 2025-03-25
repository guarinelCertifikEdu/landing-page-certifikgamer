import Image from 'next/image';

import { PlusSigns } from '../icons/plus-signs';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

const items = [
  {
    title: (
      <>
        Automatizado
        <br />
      </>
    ),
    description: [
      'Nosso sistema identifica e valida automaticamente suas habilidades em diferentes jogos. Seja você um estrategista em MOBAs ou um sniper em FPS, a plataforma traduz sua performance em certificações reais.',
      'Em poucos segundos, você conquista reconhecimento com base no seu desempenho — sem formulários, sem enrolação.',
    ],
    image: {
      src: '/images/homepage/automacao.jpg',
      alt: 'Certificação automática para gamers',
      type: 'fill',
    },
    className:
      'flex flex-col pl-6 py-6 overflow-hidden md:col-span-3 md:flex-row gap-6 md:gap-12',
    headerClassName: 'flex-2 p-0',
    contentClassName:
      'relative h-[320px] w-full self-center overflow-hidden rounded-l-xl border md:flex-1',
  },
  {
    title: 'Seguro',
    description: [
      'Levamos sua privacidade a sério. Seus dados de gameplay são protegidos por criptografia de ponta e hospedados com segurança na infraestrutura da AWS.',
      'A plataforma está 100% em conformidade com a LGPD, garantindo que você tenha controle total sobre suas informações.',
    ],
    image: {
      src: '/images/homepage/why-charter/2.svg',
      alt: 'Segurança para dados de jogadores',
      width: 283,
      height: 45,
    },
    className: 'md:col-span-2 flex flex-col justify-center',
    contentClassName:
      'flex  items-center justify-center p-6 max-md:mt-4 max-md:mb-8',
    imagePosition: 'content',
  },
  {
    title: 'Versátil',
    description: [
      'Conecte-se com diversas plataformas de jogos ou envie seus dados manualmente — nossa tecnologia se adapta ao seu estilo. Suportamos integração via API, arquivos e muito mais.',
      'Com um painel intuitivo, você acompanha sua evolução em diferentes títulos e categorias, tudo em um só lugar.',
    ],
    image: {
      src: '/images/homepage/why-charter/3.svg',
      alt: 'Versatilidade para vários jogos e estilos',
      width: 283,
      height: 45,
    },
    className: 'md:col-span-2',
    headerClassName: 'h-full',
    imagePosition: 'header',
  },
  {
    title: 'Escalável',
    description: [
      'Feito para escalar. Seja você um jogador solo ou uma organização com centenas de membros, nossa infraestrutura suporta grandes volumes de dados e certificações simultâneas.',
      'Ideal para comunidades, torneios, escolas de eSports e mais.',
    ],
    image: {
      src: '/images/homepage/features-tabs/escalavel.jpg',
      alt: 'Escalabilidade para comunidades gamers',
      type: 'fill',
    },
    className: 'overflow-hidden md:col-span-3 ',
    headerClassName: '',
    contentClassName:
      'relative h-[242px] mt-2 p-0 ml-8 w-full md:max-w-[400px] lg:max-w-[500px] overflow-hidden md:mx-auto shadow-xl rounded-t-2xl',
  },
];

const WhyCertifikGamer = () => {
  return (
    <section
      id="why-charter"
      className="relative container py-16 md:py-28 lg:py-32"
    >
      <h3 className="mini-title">PORQUE CertifikGamer?</h3>

      <div className="relative z-10 mt-8 grid grid-cols-1 gap-6 md:grid-cols-5">
        {items.map((item, index) => (
          <Card
            key={index}
            className={cn('col-span-1 shadow-xl', item.className)}
          >
            <CardHeader className={item.headerClassName}>
              {item.imagePosition === 'header' && (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  className="flex-1 self-center max-md:mt-4 max-md:mb-8 dark:[filter:brightness(0)_saturate(100%)_invert(100%)]"
                />
              )}
              <CardTitle className="text-3xl">{item.title}</CardTitle>
              {item.description.map((desc, i) => (
                <CardDescription
                  key={i}
                  className="mt-3 text-base leading-snug font-medium"
                >
                  {desc}
                </CardDescription>
              ))}
            </CardHeader>
            <CardContent className={item.contentClassName}>
              {item.image.type === 'fill' ? (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover object-left-top"
                />
              ) : (
                item.imagePosition === 'content' && (
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    className="self-center dark:[filter:brightness(0)_saturate(100%)_invert(100%)]"
                  />
                )
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Background decoration */}
      <>
        <div className="absolute inset-0 isolate will-change-transform">
          <div className="bg-primary-gradient/28 absolute top-1/2 size-[700px] -translate-y-1/2 rounded-full blur-[300px]" />
          <div className="bg-secondary-gradient/16 absolute top-1/2 right-0 size-[700px] -translate-y-1/2 -rotate-12 rounded-full blur-[300px]" />
          <div className="bg-tertiary-gradient/6 absolute right-20 bottom-1/4 z-[1] h-[500px] w-[800px] -rotate-12 rounded-full blur-[100px] md:bottom-10" />
        </div>
        <div className="absolute -inset-x-20 top-0 [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_85%)]">
          <PlusSigns className="text-foreground/[0.075] h-full w-full" />
        </div>
      </>
    </section>
  );
};

export default WhyCertifikGamer;
