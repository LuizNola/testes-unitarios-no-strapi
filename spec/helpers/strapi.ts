const Strapi = require("@strapi/strapi");
const fs = require("fs");

let instance;

export async function setupStrapi() {
  if (!instance) {
    await Strapi.compile().then((appContext) => Strapi(appContext).load());
    instance = strapi;

    global.strapi = strapi;
    
    await instance.server.mount();
  }
  return instance;
}

export async function cleanupStrapi() {
  const dbSettings = strapi.config.get("database.connection");

  //close server to release the db-file
  await strapi.server.httpServer.close();

  // close the connection to the database before deletion
  await strapi.db.connection.destroy();
}
