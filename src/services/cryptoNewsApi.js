import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const CryptoNewsHeaders = {
  'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '5714c7e7damshc33077b1d2c35fdp138ea2jsncccf0eedc90e',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const CreateRequest = (url) => ({url, headers: CryptoNewsHeaders})


export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({newsCategory, count}) => CreateRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
    })
  })
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi
// const options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics',
//   params: {textFormat: 'Raw', safeSearch: 'Off'},
//   headers: {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': '5714c7e7damshc33077b1d2c35fdp138ea2jsncccf0eedc90e',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//   }
// };
