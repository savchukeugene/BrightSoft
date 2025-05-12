import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupCreateDto } from './dto/group-create.dto';

@Controller('group')
export class GroupController {
  public constructor(private readonly groupService: GroupService) {}

  @Post('createGroup')
  @HttpCode(HttpStatus.OK)
  public async createGroup(dto: GroupCreateDto) {
    const data = await this.groupService.create(dto);
    return data;
  }

  @Post('getGroupById')
  @HttpCode(HttpStatus.OK)
  public async getGroupById(@Query() query: { groupId: string }) {
    const data = await this.groupService.findById(query.groupId);
    return data;
  }

  @Post('assignUsers')
  @HttpCode(HttpStatus.OK)
  public async assignUsers(@Body() dto: { id: string; users: string[] }) {
    const data = await this.groupService.assignUsers(dto);
    return data;
  }
}
