// Packages
import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// Model
import { User } from '../model/user.schema';
// Service
import { UserService } from 'src/service/user.service';

@Controller('/v1/user')
export class UserController {
  constructor(
    private readonly userServerice: UserService,
    private jwtService: JwtService,
  ) {}
  @Post('/signup')
  async Signup(@Res() response, @Body() user: User) {
    const newUser = await this.userServerice.signup(user);
    return response.status(HttpStatus.CREATED).json({
      newUser,
    });
  }
  @Post('/signin')
  async SignIn(@Res() response, @Body() user: User) {
    const token = await this.userServerice.signin(user, this.jwtService);
    return response.status(HttpStatus.OK).json(token);
  }
}
