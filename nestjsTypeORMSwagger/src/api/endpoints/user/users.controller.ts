import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

import { User } from 'src/infra/entities';
import { CreateUserRequest } from 'src/api/endpoints/user/infra/request';
import { UserCreatedResponse } from 'src/api/endpoints/user/infra/send';
import { UsersService } from 'src/api/endpoints/user/users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({
    type: UserCreatedResponse,
    description: 'Route for create user with params in body',
    status: 201,
  })
  async create(@Body() body: CreateUserRequest, @Res() res): Promise<User> {
    const resultado = await this.usersService.create(body as User);
    return res.status(201).json(resultado);
  }

  @Get()
  @ApiResponse({
    type: UserCreatedResponse,
    isArray: true,
    description: 'Route for return users created',
    status: 200,
  })
  async findAll(@Res() res): Promise<User[]> {
    const resultado = await this.usersService.findAll();
    return res.status(200).json(resultado);
  }
}
