import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    console.log('REQUEST', { body: context.switchToHttp().getRequest().body });

    const now = Date.now();

    return next.handle().pipe(
      map((data) => {
        console.log('RESPONSE', { data });
        return { data };
      }),
      tap(() => console.log(`After... ${Date.now() - now}ms`)),
    );
  }
}
