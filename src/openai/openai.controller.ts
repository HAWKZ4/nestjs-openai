import { Body, Controller, Post } from '@nestjs/common';
import { CreateChatCompletionRequest } from './dtos/create-chat-compleiton.request';

@Controller('openai')
export class OpenaiController {
  @Post('chatCompletion')
  async createChatCompletion(@Body() body: CreateChatCompletionRequest) {
    
  }
}
