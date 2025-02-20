import {Controller, Get, Param, Post} from "@nestjs/common";

@Controller('auth')
export class AppController {
    @Get('getUser/:id')
    getHello(@Param('id') id: string): string {
        console.log(id);
        return 'Hello';
    }

    @Post()
    postData(): string {
        return 'Success'
    }
}
