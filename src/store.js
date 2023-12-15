import { reactive } from "vue";
export const store = reactive({
  //dividiamo il codice in varie sezioni
  config: {
    baseApiUrl: "https://api.themoviedb.org/3/search/",
    movie: "movie",
    tv: "tv",
    apiKey: "?api_key=e99307154c6dfb0b4750f6603256716d",
    query: "&query=",
  },
});
