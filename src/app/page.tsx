import AIChatbot from '@/components/sections/ai-chatbot';
import CodeSecurity from '@/components/sections/code-security';
import Hero from '@/components/sections/hero';
import LaunchPricing from '@/components/sections/launch-pricing';
import Testimonials from '@/components/sections/testimonials';
import WhyCharter from '@/components/sections/why-charter';

export default function Home() {
  return (
    <>
      <Hero />
      <CodeSecurity />
      <Testimonials />
      <WhyCharter />
      <AIChatbot />
      <LaunchPricing />
    </>
  );
}
