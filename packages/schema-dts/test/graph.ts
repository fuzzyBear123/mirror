import {Graph} from '../dist/schema';

// "@context" and "@graph" are both required
// @ts-expect-error Missing @graph and @context
let _1: Graph = {};

// @ts-expect-error Missing @context
let _2: Graph = {'@graph': []};

// @ts-expect-error Missing @graph
let _3: Graph = {'@context': 'https://schema.org'};

let _4: Graph = {
  '@context': 'https://schema.org',
  '@graph': [],
};

// "@context" must be correct.
let _5: Graph = {
  // @ts-expect-error Incorrect context
  '@context': 'https://google.com',
  '@graph': [],
};

// "@graph" can have full objects, and types
let _6: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {'@type': 'Thing'},
    {'@type': 'Thing', '@id': 'X'},
    {'@type': 'Person', knowsAbout: {'@id': 'X'}},
  ],
};

// "@graph" still type-checks
let _7: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Thing',
      // @ts-expect-error Unknown property
      g: 5,
    },
    {
      // @ts-expect-error Invalid type
      '@type': 'Thingz',
      '@id': 'X',
    },
    {'@type': 'Person', knowsAbout: {'@id': 'X'}},
  ],
};
