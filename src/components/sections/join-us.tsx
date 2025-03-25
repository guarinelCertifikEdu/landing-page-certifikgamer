import React from 'react';

import Link from 'next/link';

import { Button } from '../ui/button';

const JoinUs = () => {
  const jobCategories = [];

  return (
    <section className="container max-w-5xl py-10 md:py-12 lg:py-15">
      <div className="border-t pt-5">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight md:text-4xl">
            Junte-se a nós
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl pb-10 text-2xl md:pb-12 md:text-3xl lg:pb-15">
          Automatize a burocracia e foque no crescimento da sua empresa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
