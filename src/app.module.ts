import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply((req, _, next) => {
        console.log(req.originalUrl);
        next();
      })
      .exclude({ path: 'exclude', method: RequestMethod.ALL })

      /**
       * Comment one of lines below to see the difference in logging:
       * - for `.forRoutes(AppController)` `exclude` doesn't work
       * and middleware does apply ('exclude' and '/exclude')
       * - for `.forRoutes({ path: '*', method: RequestMethod.ALL });` `exclude` works and middleware doesn't apply
       */

      .forRoutes(AppController);
    // .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
