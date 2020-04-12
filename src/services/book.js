import request from '@/utils/request';

export async function getBookinfo(params){
    return request('/api/book/getBooks',{
    method:'POST',
    is_all:params,    
    })
}