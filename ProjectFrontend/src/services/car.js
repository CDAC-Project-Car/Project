import axios from "axios";

export async function getBrandFData() {
  const response = await axios.get("http://localhost:8080/carModel/company");

  const data = response.data;

  const result = data.map((value) => {
    return {
      carModelId: -1,
      carSeriesName: value
    };
  });

  return result;
}

export async function getModelData(company) {
    console.log(company)
  const response = await axios.get(
    `http://localhost:8080/carModel/model/${company}`
  );

  const data = response.data;

  const result = data.map((value) => {
    return {
      carModelId: -1,
      carSeriesName: value
    };
  });

  return result;
}

export async function getVariantData(model) {
    console.log(model)
  const response = await axios.get(
    `http://localhost:8080/carModel/variant/${model}`
  );

  return response.data;
}
