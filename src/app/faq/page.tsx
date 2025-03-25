import { PlusSigns } from '@/components/icons/plus-signs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const FAQ_ITEMS = [
  {
    category: '🛠 SUPORTE TÉCNICO',
    items: [
      {
        question: 'Como posso entrar em contato com o suporte?',
        answer:
          'Você pode entrar em contato com nosso suporte pelo e-mail suporte@CertifikGamer ou através do nosso chat online disponível na plataforma.',
      },
      {
        question: 'O suporte está disponível 24/7?',
        answer:
          'Nosso suporte opera de segunda a sexta-feira, das 9h às 18h (horário de Brasília). Para questões urgentes, você pode enviar um e-mail e responderemos o mais rápido possível.',
      },
      {
        question: 'O CertifikGamer possui um guia de uso ou treinamento?',
        answer:
          'Sim! Oferecemos tutoriais em vídeo e uma base de conhecimento detalhada dentro da plataforma para ajudar você a utilizar todos os nossos recursos.',
      },
    ],
  },
  {
    category: '📂 CONTA & CADASTRO',
    items: [
      {
        question: 'Como posso criar uma conta no CertifikGamer?',
        answer:
          'Basta acessar www.CertifikGamer, clicar em “Criar Conta” e preencher os dados necessários. Em poucos minutos, sua conta estará ativa.',
      },
      // {
      //   question: 'Posso usar o CertifikGamer gratuitamente?',
      //   answer:
      //     'Sim! Oferecemos um período de teste gratuito para que você possa experimentar a plataforma antes de contratar um plano.',
      // },
      {
        question: 'Como alterar minha senha?',
        answer:
          'Para redefinir sua senha, vá até a página de login e clique em “Esqueci minha senha”. Um link de recuperação será enviado para o seu e-mail.',
      },
      {
        question: 'Posso adicionar vários usuários na mesma conta?',
        answer:
          'Sim! Dependendo do seu plano, é possível adicionar múltiplos usuários ao seu time e definir permissões para cada um.',
      },
    ],
  },
  {
    category: '🤖 CHATBOT E INTELIGÊNCIA ARTIFICIAL',
    items: [
      {
        question: 'Como o chatbot da CertifikGamer pode me ajudar?',
        answer:
          'Nosso chatbot responde dúvidas sobre regulamentações, compliance e uso da plataforma em tempo real, ajudando a reduzir o tempo gasto em pesquisas e interpretações normativas.',
      },
      {
        question: 'O chatbot pode validar arquivos automaticamente?',
        answer:
          'Não. A validação e formatação dos arquivos são feitas pelos nossos algoritmos automatizados. O chatbot atua apenas como assistente para responder dúvidas e auxiliar na navegação.',
      },
      {
        question: 'O chatbot aprende com as interações?',
        answer:
          'Sim! Utilizamos machine learning para aprimorar as respostas do chatbot, garantindo respostas cada vez mais precisas e relevantes.',
      },
    ],
  },
  {
    category: '🔒 SEGURANÇA & PRIVACIDADE',
    items: [
      {
        question: 'Meus dados estão seguros no CertifikGamer?',
        answer:
          'Sim! Utilizamos a infraestrutura da AWS com criptografia avançada para garantir a máxima proteção dos seus dados.',
      },
      {
        question: 'O CertifikGamer está em conformidade com a LGPD?',
        answer:
          'Sim. Seguimos todas as diretrizes da Lei Geral de Proteção de Dados (LGPD) para garantir a privacidade e segurança das suas informações.',
      },
      {
        question: 'Meus arquivos são armazenados permanentemente na plataforma?',
        answer:
          'Não. Após a validação, os arquivos são mantidos por um período limitado para segurança e auditoria. Você pode excluí-los manualmente a qualquer momento.',
      },
    ],
  },
  {
    category: '❓ OUTRAS PERGUNTAS',
    items: [
      {
        question: 'Quantos tipos de relatórios posso validar no CertifikGamer?',
        answer:
          'Nossa plataforma suporta mais de 20 tipos de modelos regulatórios exigidos pelo Banco Central.',
      },
      {
        question: 'Posso personalizar os relatórios gerados?',
        answer:
          'Sim! Oferecemos opções de personalização para adaptar os relatórios às necessidades da sua empresa.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <section className="relative py-16 md:py-28 lg:py-32">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Perguntas Frequentes (FAQ)
            </h1>
            <p className="text-muted-foreground mt-4 text-2xl md:text-3xl">
              Tudo que você precisa saber
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-2xl space-y-12 md:mt-12 lg:mt-20">
            {FAQ_ITEMS.map((category) => (
              <Card key={category.category} className="border-hidden">
                <CardHeader className="pb-0">
                  <h3 className="text-accent-foreground border-b pb-4 font-mono text-sm font-medium tracking-widest uppercase">
                    {category.category}
                  </h3>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, i) => (
                      <AccordionItem
                        key={i}
                        value={`${category.category}-${i}`}
                        className="border-muted border-b last:border-0"
                      >
                        <AccordionTrigger className="text-base font-medium hover:no-underline">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base font-medium">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="absolute -inset-40 z-[-1] [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_75%)]">
          <PlusSigns className="text-foreground/[0.05] h-full w-full" />
        </div>
      </section>
      {/* <Testimonials /> */}
    </>
  )
}
