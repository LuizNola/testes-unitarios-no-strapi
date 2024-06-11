/**
 * category service
 */

import { factories } from '@strapi/strapi';
import { testIntegration, testIntegrationTwo } from '../../../integrations/lisa.integration';

export default factories.createCoreService('api::category.category', ({strapi}) => ({
  async test() {
    const test = await strapi.db.query("api::category.category").findOne({
      where: {
        id: "1"
      }
    });
    const operation = (await testIntegration()) + (await testIntegrationTwo());
    return { operation, test};
  }
}));
