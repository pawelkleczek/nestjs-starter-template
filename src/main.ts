import { createNestHttpApp } from './app.factory';

(async () => {
  const app = await createNestHttpApp();
  app.listen(process.env.PORT || 3000);
})();
