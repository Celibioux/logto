import { ApplicationType } from '@logto/schemas';

import { type GuideMetadata } from '../types';

const metadata: Readonly<GuideMetadata> = Object.freeze({
  name: 'Next.js (Pages Router)',
  description: 'Next.js integration guide for Pages Router.',
  target: ApplicationType.Traditional,
  sample: {
    repo: 'js',
    path: 'packages/next-sample',
  },
  fullGuide: {
    title: 'Full Next.js SDK tutorial',
    url: 'https://docs.logto.io/sdk/next',
  },
});

export default metadata;
