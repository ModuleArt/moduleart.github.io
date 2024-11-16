export const routeDictionary = {
  home: () => "/",
  about: () => "/about",
  project: (productId: string) => `/${productId}`,
};
