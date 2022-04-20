import { Post } from "../../models/post.model";
import { postTypes } from "../configs/posts.configs";

export const postList : Array<Post> = [
    {
        id: 161230000,
        userId: 779476,
        date: new Date('2020/05/05'),
        message: "World's most beautiful car in Curabitur the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
        type: postTypes['quote'],
        typeTarget: 16437887
    },
    {
        id: 16123887,
        userId: 175752,
        date: new Date('2020/05/05'),
        message: "World's most beautiful car in Curabitur the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
        type: postTypes['repost'],
        typeTarget: 16437887
    },
    {
        id: 16577887,
        userId: 601993,
        date: new Date('2020/05/05'),
        message: "World's most beautiful car in Curabitur the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
        type: postTypes['normal'],
        typeTarget: null
    },
    {
        id: 16556887,
        userId: 451932,
        date: new Date('2020/05/05'),
        message: "Curabitur Lonely Cat Enjoying in Summer ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,",
        type: postTypes['normal'],
        typeTarget: null
    },
    {
        id: 16437887,
        userId: 244497,
        date: new Date('2020/05/05'),
        message: "Curabitur World's most beautiful car in the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
        type: postTypes['normal'],
        typeTarget: null
    },
    {
        id: 16437887889,
        userId: 244497,
        date: new Date('2020/05/05'),
        message: "Curabitur World's most beautiful car in the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
        type: postTypes['normal'],
        typeTarget: 1
    }
];