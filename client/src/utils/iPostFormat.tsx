export const defaultPost = {
    id:6,
    report:'', 
    description:'', 
    location:'', 
    timeSeen:'', 
    timeFiled: '', 
    category_id: 0,
    tags: [{
        id:1,
        tag_name:''
    }],
    user: {
        id:1,
        username:''
    }}

export interface iPost {
    id:number,
    report:string, 
    description:string, 
    location:string, 
    timeSeen:string,
    timeFiled:string,
    category_id:number,
    tags: [{
        id:number
        tag_name:string}],
    user: {
        id:number
        username:string}
}