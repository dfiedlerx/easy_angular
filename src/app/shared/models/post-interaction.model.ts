import { Post } from "./post.model";
import { User } from "./user.model";

export interface PostInteraction {
    type: string,
    user: User,
    post: Post,
}