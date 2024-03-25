import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserRequest } from '../request';

export class UserCreatedResponse extends CreateUserRequest {
  @ApiProperty({ type: 'number', example: 4, minimum: 1 })
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Type(() => Number)
  id: number;
}
