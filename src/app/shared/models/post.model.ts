export interface Post {
    id: number,
    userId: number,
    date: Date,
    message: string,
    type: string,
    typeTarget: number|null
}
