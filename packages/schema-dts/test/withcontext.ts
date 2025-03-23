import {Thing, WithContext} from '../dist/schema';

// "@context" and "@type" are both required
// @ts-expect-error Missing '@type' and '@contet.'
let _1: WithContext<Thing> = {};

// @ts-expect-error Missing '@context'
let _2: WithContext<Thing> = {'@type': 'Thing'};

// @ts-expect-error Missing '@type'
let _3: WithContext<Thing> = {'@context': 'https://schema.org'};

let _4: WithContext<Thing> = {
  '@context': 'https://schema.org',
  '@type': 'Thing',
};

// "@context" must be correct.
let _5: WithContext<Thing> = {
  // @ts-expect-error Must be schema.org
  '@context': 'https://google.com',
  '@type': 'Thing',
};
