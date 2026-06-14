function getTareasPorRA(ra) {
  return fetch('https://mocki.io/v1/d83461a9-2bc1-4b7e-8451-6709460b3a51')
    .then((res) => res.json())
    .then((data) => data ?? [])
    .catch(() => []);
}

export default getTareasPorRA;