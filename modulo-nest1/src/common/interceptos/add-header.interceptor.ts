import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { response } from "express";
import { Observable } from "rxjs";


export class AddHeaderInterceptor implements NestInterceptor {
   intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
      const resoponse = context.switchToHttp().getResponse();

      resoponse.setHeader('X-Custom', 'Valor chave 123')

      return next.handle()
   }
}