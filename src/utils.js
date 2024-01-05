export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
/**
 The metadata (module URL) from import.meta.url is being used to construct a new URL. 
 The new URL is formed by combining the module's URL (where this code is executed) with the provided path. 
 The new URL(...) part is creating a URL object with the base URL as import.meta.url and the relative path as 'assets/${path}'. 
 Finally, .href is used to get the complete URL as a string.

 This makes it easier to dynamically import images into our different components
 */
