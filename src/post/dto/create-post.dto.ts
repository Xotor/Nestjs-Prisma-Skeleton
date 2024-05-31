export class CreatePostDto {
    title: string;
    content: string | undefined;
    published: boolean;
    author: number;
}
