


export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return response.json();
};

// getData receives some type <T> of string and returns a Promise/await. A promise receives a parameter - it needs to know what the type it expects to return as the resolve value of the promise. 
// A generic can be used <T> 
