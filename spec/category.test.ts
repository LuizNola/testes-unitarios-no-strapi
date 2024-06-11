import { setupStrapi } from "./helpers/strapi";
export { testIntegration } from "./../src/integrations/lisa.integration";

import categoryService from "./../src/api/category/services/category";

jest.mock('./../src/integrations/lisa.integration', () => ({
  testIntegration: jest.fn(() => 9),
  testIntegrationTwo: () => 5,
}));


beforeAll(async () => {
  await setupStrapi();
});

it("Sucess  ", async () => {
  // ARRANGE
  let findOneSpy = jest.spyOn(strapi.db.query('api::category.category'), 'findOne');
  findOneSpy.mockResolvedValue("teste");

  // ACT
  const response = await categoryService({strapi}).test()

  // ASSERT
  expect(response).toEqual({"operation": 14, "test": "teste"});
}, 100000);