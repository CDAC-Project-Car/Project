import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getBrandFData, getModelData, getVariantData } from "../services/car";
import { Link, useNavigate } from "react-router-dom";
import { Select } from "../components/Select";
import { toast } from "react-toastify";

export default function Compare() {
  // for select-options
  // Car-1
  const [brandsCar1, setBrandsCar1] = useState([]);
  const [modelsCar1, setModelsCar1] = useState([]);
  const [variantsCar1, setVariantsCar1] = useState([]);

  const [selectedBrandCar1, setSelectedBrandCar1] = useState(null);
  const [selectedModelCar1, setSelectedModelCar1] = useState(null);
  const [selectedVariantCar1, setSelectedVariantCar1] = useState(null);

  // for getting brand data (one time)
  useEffect(() => {
    const fetchBrand = async () => {
      const data = await getBrandFData();
      setBrandsCar1(data);
    };
    fetchBrand();
  }, []);

  // for getting model data (on basis of brand selection)

  useEffect(() => {
    const fetchModels = async () => {
      if (selectedBrandCar1) {
        const data = await getModelData(selectedBrandCar1);
        setModelsCar1(data);
      } else {
        setVariantsCar1([]);
        setModelsCar1([]);
        setSelectedModelCar1(null);
      }
    };

    fetchModels();
  }, [selectedBrandCar1]);

  // for getting model data (on basis of model selection)

  useEffect(() => {
    const fetchVariant = async () => {
      if (selectedModelCar1) {
        const data = await getVariantData(selectedModelCar1);
        setVariantsCar1(data);
      } else {
        setVariantsCar1([]);
      }
    };
    fetchVariant();
  }, [selectedModelCar1]);

  //   --------------------------------------------------------------------------------

  // for select-options

  // Car-2

  const [brandsCar2, setBrandsCar2] = useState([]);
  const [modelsCar2, setModelsCar2] = useState([]);
  const [variantsCar2, setVariantsCar2] = useState([]);

  const [selectedBrandCar2, setSelectedBrandCar2] = useState(null);
  const [selectedModelCar2, setSelectedModelCar2] = useState(null);
  const [selectedVariantCar2, setSelectedVariantCar2] = useState(null);

  // for getting brand data (one time)
  useEffect(() => {
    const fetchBrand = async () => {
      const data = await getBrandFData();
      setBrandsCar2(data);
    };
    fetchBrand();
  }, []);

  // for getting model data (on basis of brand selection)

  useEffect(() => {
    const fetchModels = async () => {
      if (selectedBrandCar2) {
        const data = await getModelData(selectedBrandCar2);
        setModelsCar2(data);
      } else {
        setVariantsCar2([]);
        setModelsCar2([]);
        setSelectedModelCar2(null);
      }
    };

    fetchModels();
  }, [selectedBrandCar2]);

  // for getting model data (on basis of model selection)

  useEffect(() => {
    const fetchVariant = async () => {
      if (selectedModelCar2) {
        const data = await getVariantData(selectedModelCar2);
        setVariantsCar2(data);
      } else {
        setVariantsCar2([]);
      }
    };
    fetchVariant();
  }, [selectedModelCar2]);

  // -------------------------------------------------------------------------------------

  const navigate = useNavigate();

  const onCompare = () => {

    

    const dataToSend= {
      m1:selectedVariantCar1,
      m2:selectedVariantCar2
    }

    if(dataToSend.m1==dataToSend.m2)
      toast.warn("Please Select Different Model !")
    else
    navigate('/compareRender' , { state: dataToSend })


  };

  return (
    <div>
      <Navbar />

      <div className="container-fluid">
        {/* <h3 style={{ textAlign: "center", color: "steelblue" }}>
          Compare Cars
        </h3> */}
        <div className="row mt-5">
          <div className="col-1"></div>

          <div className="col-10">
            <div class="card mb-5">
              <h5 class="card-header">Find Your Best !</h5>
              <div class="card-body">
                {/* <h5 class="card-title">Compare Cars</h5> */}

                <div className="row">
                  <div className="col">
                    <h5>Car-1</h5>
                    <div className="mb-3">
                      <Select
                        id="select-brand"
                        value={selectedBrandCar1}
                        onChange={(e) => {
                          setSelectedBrandCar1(e.target.value);
                          setSelectedModelCar1(null);
                          setVariantsCar1([]);
                        }}
                        disabled={false}
                        defaultOption="Select Car Brand"
                        options={brandsCar1}
                      />
                    </div>

                    <div className="mb-3">
                      <Select
                        id="select-model"
                        value={selectedModelCar1}
                        onChange={(e) => {
                          setSelectedModelCar1(e.target.value);

                          setVariantsCar1([]);
                        }}
                        disabled={!selectedBrandCar1}
                        defaultOption="Select Car Model"
                        options={modelsCar1}
                      />
                    </div>

                    <div className="mb-3">
                      <Select
                        id="select-variant"
                        value={selectedVariantCar1}
                        onChange={(e) => {
                          setSelectedVariantCar1(e.target.value);
                        }}
                        disabled={!selectedModelCar1}
                        defaultOption="Select Car Variant"
                        options={variantsCar1}
                      />
                    </div>
                  </div>

                  <div className="col">
                    <h5>Car-2</h5>

                    <div className="mb-3">
                      <Select
                        id="select-brand2"
                        value={selectedBrandCar2}
                        onChange={(e) => {
                          setSelectedBrandCar2(e.target.value);
                          setSelectedModelCar2(null);
                          setVariantsCar2([]);
                        }}
                        disabled={false}
                        defaultOption="Select Car Brand"
                        options={brandsCar2}
                      />
                    </div>

                    <div className="mb-3">
                      <Select
                        id="select-model2"
                        value={selectedModelCar2}
                        onChange={(e) => {
                          setSelectedModelCar2(e.target.value);

                          setVariantsCar2([]);
                        }}
                        disabled={!selectedBrandCar2}
                        defaultOption="Select Car Model"
                        options={modelsCar2}
                      />
                    </div>

                    <div className="mb-3">
                      <Select
                        id="select-variant2"
                        value={selectedVariantCar2}
                        onChange={(e) => {
                          setSelectedVariantCar2(e.target.value);
                        }}
                        disabled={!selectedModelCar2}
                        defaultOption="Select Car Variant"
                        options={variantsCar2}
                      />
                    </div>
                  </div>
                </div>

                <br />

                <center>
                  <button className="btn btn-success" onClick={onCompare} >Compare</button>
                </center>
              </div>
            </div>
            {/* card div end */}
          </div>

          <div className="col-1"></div>

          {/* row */}
        </div>

        {/* container fluid */}
      </div>

      <Footer />
    </div>
  );
}
