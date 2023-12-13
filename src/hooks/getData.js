const api_key = "ksjiDen2KX1gNc67jJT6d8GyZzdwdKVot9SQHdEx";
const base_url = "https://api.nasa.gov/planetary/apod";
export default async function getData(_params) {
  try {
    const res = await fetch(
      `${base_url}?api_key=${api_key}${
        typeof _params !== "undefined" && _params.length > 0 ? _params : ""
      }`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}
