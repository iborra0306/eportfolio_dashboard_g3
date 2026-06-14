function getFamiliasProfesionales() {
  return fetch('https://mocki.io/v1/077cea9f-c6fa-4679-8639-bf5dee4f5d80')
    .then((res) => res.json())
    .then((data) => {
      return data.familias_profesionales ?? [];
    })
    .catch(() => []);
}

export default getFamiliasProfesionales;