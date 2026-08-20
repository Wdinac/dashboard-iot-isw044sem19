fetch('https://countries.trevorblades.com/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `{ country(code: "BR") { name capital currency } }`,
  }),
})
  .then((r) => r.json())
  .then((json) => console.log(json.data.country));
