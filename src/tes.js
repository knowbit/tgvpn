//
// console.log((new Date('2023-09-21T06:21:11.088Z')).getTime())
//
// console.log(Date.now())
// 1695277271096
// 1695277271088


function google() {
  (async () => {
    const res = await fetch('https://google.com');
    return await res.text();
  })()
  return Promise.resolve('sdf')
  //   .then(() => {
  //
  // })
}

console.error('dsfsd')
