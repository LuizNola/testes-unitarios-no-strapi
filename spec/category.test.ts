import { setupStrapi } from "./helpers/strapi";
export { testIntegration } from "./../src/integrations/lisa.integration";

import categoryService from "./../src/api/category/services/category";
import { testIntegrationTwo } from "./../src/integrations/lisa.integration";

jest.mock('./../src/integrations/lisa.integration', () => ({
  testIntegration: jest.fn(() => 9),
  testIntegrationTwo: () => 5,
}));


beforeAll(async () => {
  await setupStrapi();
  const strp = {
    ...strapi,
    db: {
      ...strapi.db,
      query: () => ({
        ...strapi.db.query,
        findOne: (...args: any[]) => ("ok"),
      }),
    },
  };
  
  console.log(strp);
});

it("Test must return 321", async () => {
  // ARRANGE

  // ACT
  const response = await categoryService({strapi}).test()

  // ASSERT
  expect(response).toBe(14);
}, 100000);