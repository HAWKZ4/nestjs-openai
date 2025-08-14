import { Body, Controller, Post } from '@nestjs/common';
import { CreateChatCompletionRequest } from './dtos/create-chat-compleiton.request';
import { OpenaiService } from './openai.service';

@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}
  @Post('chatCompletion')
  async createChatCompletion(@Body() body: CreateChatCompletionRequest) {
    return this.openaiService.createChatCompletion(body.messages);
  }
}
