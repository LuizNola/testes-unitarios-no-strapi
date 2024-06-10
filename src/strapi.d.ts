import { Strapi as OriginalStrapi } from '@strapi/strapi';

declare module '@strapi/strapi' {
  export interface Strapi extends OriginalStrapi {
    testIntegration: () => string;
  }
}