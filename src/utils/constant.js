export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BGIMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_TMDB_KEY,
  },
};

export const POSTER_IMG_URL = "https://image.tmdb.org/t/p/w500";

export const suported_Language = [
  { identifier: "en", name: "english" },
  { identifier: "hindi", name: "hindi" },
  { identifier: "spanish", name: "spanish" },
  { identifier: "marathi", name: "marathi" },
  { identifier: "french", name: "french" },
];

export const GPT_KEY = process.env.REACT_APP_OPENAI_KEY;
// export const key
