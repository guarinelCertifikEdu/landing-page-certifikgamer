import Image from 'next/image';
import Link from 'next/link';

import { FaXTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa6';

const navigation = [
  {
    title: 'Produtos',
    links: [
      // { name: 'VAR', href: '/#code-security' },
      { name: 'Automação', href: '/#why-CertifikGamer' },
      { name: 'IA Chatbot', href: '/#ai-chatbot' },
      // { name: 'Loan Origination', href: '/#ai-chatbot' },
      // { name: 'Loan Purchase', href: '/#ai-chatbot' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { name: 'Valores', href: '/pricing' },
      { name: 'FAQ', href: '/faq' },
      // { name: 'Demo', href: '/contact' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'CertifikGamer',
    links: [
      { name: 'Sobre', href: '/about' },
      { name: 'Termos de Servço', href: '/terms' },
      { name: 'Política de privacidade', href: '/privacy' },
    ],
  },
];

const socialLinks = [
  { icon: FaXTwitter, href: 'https://facebook.com' },
  { icon: FaFacebook, href: 'https://twitter.com' },
  { icon: FaLinkedin, href: 'https://linkedin.com' },
];

export default function Footer() {
  return (
    <footer className="pt-16 md:pt-28 lg:pt-32">
      {/* Navigation Section */}
      <nav className="container flex max-w-5xl flex-wrap justify-between gap-x-32 gap-y-20 border-b pb-14 lg:pb-20">
        {navigation.map((section) => (
          <div key={section.title}>
            <h2 className="mb-6 font-medium lg:text-lg">{section.title}</h2>
            <ul className="space-y-6">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-muted-foreground lg:text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="container max-w-5xl py-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <Image
              src="/images/layout/logo_dark.png"
              alt="CertifikGamer"
              width={26}
              height={23}
              className="dark:invert"
            />
            <p className="text-sm font-medium">
              © {new Date().getFullYear()} CertifikGamer -{' '}
              <Link
                href="https://shadcnblocks.com"
                className="underline transition-opacity hover:opacity-80"
                target="_blank"
              >
                Shadcnblocks.com
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <Link
                aria-label={link.href}
                key={link.href}
                href={link.href}
                className="hover:text-muted-foreground"
              >
                <link.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
