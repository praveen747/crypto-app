// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchange/-zdvbieRdZ',
//     headers: {
//       referencecurrencyuuid: 'yhjMzLPhuIDl',
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '3d629932e5msh50d7f0d40747a72p1749f4jsnbea24da7c4b4'
//     }
//   };

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "3d629932e5msh50d7f0d40747a72p1749f4jsnbea24da7c4b4",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

//utility function for url and headers

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
