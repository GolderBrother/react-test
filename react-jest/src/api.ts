export function callCallback(onSuccess: Function | undefined) {
  setTimeout(() => {
    onSuccess && onSuccess({ code: 0 });
  }, 3000);
}

export function callPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ code: 0 });
    }, 3000);
  });
}
