export interface User {
    id: number,
    name: string,
    photo: string,
    dataJoined: Date,
    follow: Array<number>
}
