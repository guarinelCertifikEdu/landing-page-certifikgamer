'use client';

import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ChevronRight } from 'lucide-react';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { theme } = useTheme();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  const ITEMS = [
    {
      label: 'Produto',
      href: '#',
      dropdownItems: [
        {
          title: 'Eficiência',
          href: '/#code-security',
          description: 'Foque no que realmente importa.',
        },
        {
          title: 'Serviços',
          href: '/#why-CertifikGamer',
          description:
            'Automatize a burocracia com mais segurança e eficiência.',
        },
        {
          title: 'Inteligência Artificial',
          href: '/#ai-chatbot',
          description: 'Torne o processo ainda mais simples com o apoio da IA.',
        },
      ],
    },
    { label: 'Sobre nós', href: '/about' },
    { label: 'Valores', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header className={'relative z-50'}>
      <div className="container max-w-5xl lg:pt-10">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">

            <Image
              src={theme === "light" ? "/images/logos/ice-comply-preto-icone.png" : "/images/logos/ice-comply-branco-icone.png"}
              alt="logo"
              width={128}
              height={25}
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden items-center gap-8 lg:flex">
            <NavigationMenuList>
              {ITEMS.map((link) =>
                link.dropdownItems ? (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuTrigger className="bg-transparent font-normal lg:text-base">
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex gap-6 p-6">
                      <NavDropdownImage />
                      <ul className="w-[400px]">
                        {link.dropdownItems.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex items-center gap-4 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none"
                              >
                                <div>
                                  <div className="text-sm leading-none font-medium">
                                    {item.title}
                                  </div>
                                  <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        'hover:text-accent-foreground p-2 lg:text-base',
                        pathname === link.href && 'text-accent-foreground',
                      )}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2.5">
            <div className="text-muted-foreground hidden items-center gap-3 text-sm font-medium transition-opacity hover:opacity-80 lg:flex">
              {/* <Link href="/contact">Contato</Link> */}
              <Link href="/contact">Demonstração</Link>
            </div>
            <a
              href="https://app.certifikedu.com/"
              className={`transition-opacity duration-300 ${isMenuOpen ? 'max-lg:pointer-events-none max-lg:opacity-0' : 'opacity-100'}`}
            >
              <Button
                variant="outline"
                className="dark:bg-foreground dark:text-background"
              >
                Login
              </Button>
            </a>

            <div
              className={`transition-opacity duration-300 ${isMenuOpen ? 'max-lg:pointer-events-none max-lg:opacity-0' : 'opacity-100'}`}
            >
              <ThemeToggle className="dark:bg-foreground dark:text-background" />
            </div>

            {/* Hamburger Menu Button (Mobile Only) */}
            <button
              className="relative flex size-8 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'bg-background absolute inset-0 top-full container flex h-[calc(100vh-64px)] flex-col transition-all duration-300 ease-in-out lg:hidden',
          isMenuOpen
            ? 'visible translate-x-0 opacity-100'
            : 'invisible translate-x-full opacity-0',
        )}
      >
        <div className="mt-8 space-y-2">
          <Link
            href="/signup"
            className="block"
            onClick={() => setIsMenuOpen(false)}
          >
            <Button size="sm" className="w-full">
              Sign up
            </Button>
          </Link>
          <Link
            href="/login"
            className="block"
            onClick={() => setIsMenuOpen(false)}
          >
            <Button size="sm" className="w-full" variant="outline">
              Login
            </Button>
          </Link>
        </div>

        <nav className="mt-3 flex flex-1 flex-col gap-6">
          {ITEMS.map((link) =>
            link.dropdownItems ? (
              <div key={link.label} className="">
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.label ? null : link.label,
                    )
                  }
                  className="flex w-full items-center justify-between text-lg font-medium tracking-[-0.36px]"
                  aria-label={`${link.label} menu`}
                  aria-expanded={openDropdown === link.label}
                >
                  {link.label}
                  <ChevronRight
                    className={cn(
                      'h-4 w-4 transition-transform',
                      openDropdown === link.label ? 'rotate-90' : '',
                    )}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={cn(
                    'ml-4 space-y-3 overflow-hidden transition-all',
                    openDropdown === link.label
                      ? 'mt-3 max-h-[1000px] opacity-100'
                      : 'max-h-0 opacity-0',
                  )}
                >
                  {link.dropdownItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="hover:bg-accent flex items-start gap-3 rounded-md p-2"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'text-lg tracking-[-0.36px]',
                  pathname === link.href && 'text-muted-foreground',
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}
          <Link
            href="/contact"
            className={cn(
              'text-lg tracking-[-0.36px]',
              pathname === '/contact' && 'text-muted-foreground',
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/pricing"
            className={cn(
              'text-lg tracking-[-0.36px]',
              pathname === '/' && 'text-muted-foreground',
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Demo
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

const NavDropdownImage = () => {
  return (
    <div className="from-primary-900 via-primary to-primary/90 text-background flex flex-col gap-2 rounded-xl bg-linear-to-r">
      <div className="space-y-1 p-5 font-medium">
        <h3 className="">Comece hoje</h3>
        <p className="text-background/80 text-sm">
          Agende uma demonstração personalizada
        </p>
      </div>
      <Image
        src="/images/layout/circles.svg"
        alt="circles"
        width={288}
        height={80}
      />

      <Button
        asChild
        variant="outline"
        className="group m-5 bg-transparent font-semibold"
      >
        <Link href="/#launch-today">
          Saiba mais
          <ChevronRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  );
};
