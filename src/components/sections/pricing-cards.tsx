import React from 'react'

import Link from 'next/link'

import { Check, ChevronRight } from 'lucide-react'

import { PlusSigns } from '../icons/plus-signs'
import { Button } from '../ui/button'

import { PricingTier } from '@/app/pricing/page'
import { cn } from '@/lib/utils'

const PricingCards = ({ items }: { items: PricingTier[] }) => {
  return (
    <section className="relative py-16 text-center md:py-28 lg:py-32">
      <div className="container">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          Valores
        </h1>
        <div className="mx-auto mt-4 max-w-[45rem] space-y-2">
          <p className="text-muted-foreground text-2xl md:text-3xl">
            Solicite uma demonstração
          </p>
        </div>

        <div className="relative mt-8 md:mt-12 lg:mt-20">
          {/* Gradient background on desktop */}
          <div className="from-primary-900 to-primary/90 absolute inset-0 isolate hidden rounded-3xl bg-linear-to-r md:block">
            <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_left,black_50%,transparent_100%)]">
              <PlusSigns className="h-full w-full text-white/[0.05]" />
            </div>
          </div>

          {/* 
            Change md:grid-cols-3 to md:grid-cols-1 and add md:place-items-center 
            so a single card is centered on larger screens.
          */}
          <div className="md:divide-background/20 relative space-y-6 md:grid md:grid-cols-1 md:place-items-center md:space-y-0 md:divide-x md:p-6 lg:p-8">
            {items.map((tier, index) => (
              <PricingCard
                key={tier.name}
                tier={tier}
                isHighlighted={index === 1}
              />
            ))}
          </div>
        </div>
        <div className="absolute -inset-40 z-[-1] [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_75%)]">
          <PlusSigns className="text-foreground/[0.05] h-full w-full" />
        </div>
      </div>
    </section>
  )
}

export default PricingCards

function PricingCard({
  tier,
  isHighlighted,
}: {
  tier: PricingTier
  isHighlighted: boolean
}) {
  const styles = {
    card: cn(
      'flex flex-col gap-6 rounded-xl p-6 sm:rounded-2xl md:rounded-none lg:p-8',
      // Mobile highlight
      isHighlighted
        ? 'max-md:from-primary-900 max-md:to-primary/90 max-md:bg-linear-to-r'
        : 'bg-background max-md:border',
      // Desktop
      'md:bg-transparent'
    ),
    title: cn(
      'font-mono text-sm tracking-widest',
      isHighlighted ? 'text-background/70' : 'text-foreground/70',
      'md:text-background/70'
    ),
    price: cn(
      'text-5xl font-semibold tracking-tight',
      isHighlighted ? 'text-background' : 'text-foreground',
      'md:text-background'
    ),
    description: cn(
      'mt-2 text-xl font-medium',
      isHighlighted ? 'text-background/70' : 'text-foreground/70',
      'md:text-background/70'
    ),
    features: cn(
      'space-y-3 text-sm',
      isHighlighted ? 'text-background/70' : 'text-foreground/70',
      'md:text-background/70'
    ),
    button: cn(
      'group border-foreground/20 relative w-full',
      "after:from-border after:via-border after:absolute after:inset-0 after:bg-linear-to-t after:to-transparent after:content-[''] after:group-hover:opacity-100",
      'md:border-background/40 md:text-background md:bg-transparent',
      isHighlighted && 'md:bg-background md:text-primary hover:md:bg-background/90'
    ),
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{tier.name}</h3>
      <div>
        <p className={styles.price}>{tier.price}</p>
        <p className={styles.description}>{tier.description}</p>
      </div>
      <ul className={styles.features}>
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <Check className="size-4 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-1 items-end">
        <Button
          asChild
          variant={isHighlighted ? 'secondary' : 'outline'}
          size="lg"
          className={styles.button}
        >
          <Link href={tier.cta.href}>
            {tier.cta.text}
            <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
