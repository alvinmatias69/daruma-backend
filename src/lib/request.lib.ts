/* request.lib.ts
 * Library helper for handling request
 */

const validate = (request: any, key: string[]):[boolean, string[]] => {
  let validity: boolean = true;
  let unvalidKey: string[] = [];
  const requestKey: string[] = Object.keys(request);
  
  for (let idx: number = 0; idx < key.length; idx++) {
    if (requestKey.indexOf(key[idx]) < 0) {
      validity = false;
      unvalidKey.push(key[idx]);
    };
  };

  return [validity, unvalidKey];
};

export {
  validate
};
