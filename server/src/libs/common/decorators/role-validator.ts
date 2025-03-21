import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserRole } from '../../../../prisma/__generated__';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly requiredRoles: UserRole[]) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const cookiesValue = request.cookies;
    if (!this.requiredRoles.includes(cookiesValue.role)) {
      throw new ForbiddenException(
        'У вас не достаточно прав для обращения к этому методу!',
      );
    }
    return true;
  }
}
