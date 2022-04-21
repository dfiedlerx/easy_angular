import { KeyString } from "../../models/key-string.model";

export const postsMaxCharacters : number = 777; 
export const postMaxDayCreation : number = 5;

export const postTypes : KeyString = {
    normal: 'normal',
    repost: 'repost',
    quote: 'quote'
}

export const postsTimelineFilters : KeyString = {
    all: 'all',
    following: 'following'
}