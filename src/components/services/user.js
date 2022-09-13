import { api } from "./api"

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    
    getUser: builder.query({
        
      query: (page) => ({
        url: `/contacts?_page=${page}`,
        method: 'GET',
        // params:searchValue,
      }),
     
      transformResponse:(response)=>{
     let names=response?.map((values)=>{
        return values
     })




   return names
   
      }
    //   transformResponse: (result) => {
    //     return result
    //   },
    }),
  }),
})
