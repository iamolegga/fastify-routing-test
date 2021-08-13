# example of routing bug for fastify adaptor of nest

Middleware consumer exclude method works different:

- when `.forRoutes(MyController)` is set after `exclude` it doesn't work and middleware does apply

- when `.forRoutes({ path: '*', method: RequestMethod.ALL });` is set after `exclude` it works and middleware doesn't apply

[Link to github issue](https://github.com/nestjs/nest/issues/7848)
