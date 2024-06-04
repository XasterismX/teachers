import { IsNotEmpty } from "class-validator";

export class PostDto {
  id: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  data: string;
}