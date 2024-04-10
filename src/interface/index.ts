export interface HttpResponse {
    status: number,
    statusText: string,
    data: {
        code: number,
        [key: string]: any
    }
}
export interface HttpRequest {
    url: string,
    method: string,
    responseType?: string,
    params: {
        [key: string]: any
    },
    [key: string]: any
}