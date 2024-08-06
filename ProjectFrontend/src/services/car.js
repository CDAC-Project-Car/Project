import axios from "axios";

export async function getBrandFData() {
  const response = await axios.get("http://localhost:8080/carModel/company");

  const data = response.data;


  // changing data into desired format for component reusability
  const result = data.map((value) => {
    return {
      carModelId: -1,
      carSeriesName: value
    };
  });

  return result;
}

export async function getModelData(company) {
     
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
    
  const response = await axios.get(
    `http://localhost:8080/carModel/variant/${model}`
  );

  return response.data;
}

export async function getCompareCarData({m1, m2}) {

  const response = await axios.get(`http://localhost:8080/carModel/compare/${m1}/${m2}`)

  

  return response.data;

  
}