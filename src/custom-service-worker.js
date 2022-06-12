/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("fetch", (e) => {
    console.log(`interception ${e.request.method} to ${e.request.url}`);
  });