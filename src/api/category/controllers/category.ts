/**
 * category controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::category.category', 
    ({strapi}) => (
        {
            async test(ctx) {
                try {
                    // Returning the count
                    const response = await strapi.service("api::category.category").test();

                    ctx.body = { response };
                } catch(err) {
                    return ctx.badRequest
                }
            }
        }
    )
)
