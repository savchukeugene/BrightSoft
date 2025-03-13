import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  public async register() {}
  public async login() {}
  public async logout() {}
  private async saveSession() {}
}
