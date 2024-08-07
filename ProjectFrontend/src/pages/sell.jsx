import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getBrandFData, getModelData, getVariantData } from "../services/car";
import { useEffect, useState } from "react";
import { Select } from "../components/Select";

export default function Sell() {
  // for select-options

  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [variants, setVariants] = useState([]);

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  // for getting brand data (one time)
  useEffect(() => {
    const fetchBrand = async () => {
      const data = await getBrandFData();
      setBrands(data);
    };
    fetchBrand();
  }, []);

  // for getting model data (on basis of brand selection)

  useEffect(() => {
    const fetchModels = async () => {
      if (selectedBrand) {
        const data = await getModelData(selectedBrand);
        setModels(data);
      } else {
        setVariants([]);
        setModels([]);
        setSelectedModel(null);
      }
    };

    fetchModels();
  }, [selectedBrand]);

  // for getting model data (on basis of model selection)

  useEffect(() => {
    const fetchVariant = async () => {
      if (selectedModel) {
        const data = await getVariantData(selectedModel);
        setVariants(data);
      } else {
        setVariants([]);
      }
    };
    fetchVariant();
  }, [selectedModel]);

  // for booleans
  const [isInsured, setInsured] = useState(false);
  const [isPowerSteering, setPowerSteering] = useState(false);
  const [isPowerWindows, setPowerWindows] = useState(false);
  const [isAirConditioner, setAirConditioner] = useState(false);
  const [isAdjustableHeadLight, setAdjustableHeadLight] = useState(false);
  const [isFogLights, setFogLights] = useState(false);
  const [isABS, setABS] = useState(false);
  const [isBrakeAssist, setBrakeAssist] = useState(false);
  const [isMusicSystem, setMusicSystem] = useState(false);
  const [isSpeakers, setSpeakers] = useState(false);
  const [isAdjustableSeats, setAdjustableSeats] = useState(false);
  const [isCruiseControl, setCruiseControl] = useState(false);
  const [isNavigationSystem, setNavigationSystem] = useState(false);
  const [isPowerAdjustableMirrors, setPowerAdjustableMirrors] = useState(false);
  const [isSunroof, setSunroof] = useState(false);
  const [isAirbags, setAirbags] = useState(false);
  const [isSeatBelt, setSeatBelt] = useState(false);
  const [isCentralLocking, setCentralLocking] = useState(false);

  const onSell = () => {
    //to do
    console.log(selectedVariant);
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <h3
          style={{
            fontWeight: "bold",
            color: "steelblue",
            textAlign: "center",
          }}
        >
          Sell Car
        </h3>
        <div className="row mt-5">
          {/* col-2 */}
          <div className="col-2"></div>

          {/* col-8 */}
          <div
            className="col-8"
            style={{
              backgroundColor: "skyblue",
              borderBlockStyle: "solid",
              borderRadius: 10,
            }}
          >
            <div className="row mt-3">
              <div className="col-4">
                <div className="mb-3">
                  <Select
                    id="select-brand"
                    value={selectedBrand}
                    onChange={(e) => {
                      setSelectedBrand(e.target.value);
                      setSelectedModel(null);
                      setVariants([]);
                    }}
                    disabled={false}
                    defaultOption="Select Car Brand"
                    options={brands}
                  />
                </div>
              </div>

              <div className="col-4">
                <div className="mb-3">
                  <Select
                    id="select-model"
                    value={selectedModel}
                    onChange={(e) => {
                      setSelectedModel(e.target.value);

                      setVariants([]);
                    }}
                    disabled={!selectedBrand}
                    defaultOption="Select Car Model"
                    options={models}
                  />
                </div>
              </div>

              <div className="col-4">
                <div className="mb-3">
                  <Select
                    id="select-variant"
                    value={selectedVariant}
                    onChange={(e) => {
                      setSelectedVariant(e.target.value);
                    }}
                    disabled={!selectedModel}
                    defaultOption="Select Car Variant"
                    options={variants}
                  />
                </div>
              </div>

              {/* row-1 */}
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="">Car Number</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col">
                <div className="mb-3">
                  <label htmlFor="">RTO Location</label>

                  <input type="text" className="form-control" />
                </div>
              </div>

              {/* row-2 */}
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="">KM Driven</label>
                  <input type="number" className="form-control" />
                </div>
              </div>

              <div className="col">
                <div className="mb-3">
                  <label htmlFor="">Past Owners</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              {/* row-2 */}
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="">Manufacturing Year</label>
                  <input type="number" className="form-control" />
                </div>
              </div>

              <div className="col">
                <div className="mb-3">
                  <label htmlFor="">Mileage</label>
                  <input type="number" className="form-control" />
                </div>
              </div>

              {/* row-3 */}
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="">Color</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col">
                <div className="mb-3">
                  <label htmlFor="">Selling Price</label>
                  <input type="number" className="form-control" />
                </div>
              </div>

              {/* row-3 */}
            </div>

            <div className="row mt-3 mb-3">
              <div className="col">
                <div
                  style={{ fontWeight: "bold", fontSize: 20 }}
                  className=" mb-1"
                >
                  Upload Images
                </div>

                <input
                  class="form-control"
                  type="file"
                  id="formFileMultiple"
                  // accept=".jpg,.jpeg"
                  accept="image/*"
                  multiple
                />
              </div>
              {/* <div className="col"></div> */}
            </div>

            <div style={{ fontWeight: "bold", fontSize: 20 }} className="mb-1">
              Currently available features ::{" "}
            </div>

            {/* forgot to make component , if required will make component */}

            <div className="row">
              <div className="col">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="check1"
                    checked={isInsured}
                    onChange={(e) => {
                      setInsured(e.target.checked);
                    }}
                  />
                  <label class="custom-control-label" for="insurance">
                    Is insured ?
                  </label>
                </div>
              </div>

              <div className="col">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="check2"
                    checked={isPowerSteering}
                    onChange={(e) => {
                      setPowerSteering(e.target.checked);
                    }}
                  />
                  <label class="custom-control-label" for="customCheck1">
                    Power Steering ?
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="check3"
                    checked={isPowerWindows}
                    onChange={(e) => {
                      setPowerWindows(e.target.checked);
                    }}
                  />
                  <label class="custom-control-label" for="customCheck3">
                    Power Windows ?
                  </label>
                </div>
              </div>

              <div className="col">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="check4"
                    checked={isAirConditioner}
                    onChange={(e) => {
                      setAirConditioner(e.target.checked);
                    }}
                  />
                  <label class="custom-control-label" for="customCheck4">
                    Air Conditioner ?
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="check5"
                    checked={isAdjustableHeadLight}
                    onChange={(e) => {
                      setAdjustableHeadLight(e.target.checked);
                    }}
                  />
                  <label class="custom-control-label" for="customCheck5">
                    Adjustable Head Light ?
                  </label>
                </div>
              </div>

              <div className="col">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="check6"
                    checked={isFogLights}
                    onChange={(e) => {
                      setFogLights(e.target.checked);
                    }}
                  />
                  <label class="custom-control-label" for="customCheck6">
                    Fog Lights ?
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="check7"
                    checked={isABS}
                    onChange={(e) => {
                      setABS(e.target.checked);
                    }}
                  />
                  <label class="custom-control-label" for="customCheck7">
                    ABS available ?
                  </label>
                </div>
              </div>

              <div className="col">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="check8"
                    checked={isBrakeAssist}
                    onChange={(e) => {
                      setBrakeAssist(e.target.checked);
                    }}
                  />
                  <label class="custom-control-label" for="customCheck8">
                    Brake Assist ?
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="check9"
                    checked={isMusicSystem}
                    onChange={(e) => {
                      setMusicSystem(e.target.checked);
                    }}
                  />
                  <label class="custom-control-label" for="customCheck9">
                    Music System ?
                  </label>
                </div>
              </div>

              <div className="col">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="check10"
                    checked={isSpeakers}
                    onChange={(e) => {
                      setSpeakers(e.target.checked);
                    }}
                  />
                  <label class="custom-control-label" for="customCheck10">
                    Speakers ?
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="check11"
                    checked={isAdjustableSeats}
                    onChange={(e) => {
                      setAdjustableSeats(e.target.checked);
                    }}
                  />
                  <label class="custom-control-label" for="customCheck11">
                    Adjustable Seats ?
                  </label>
                </div>
              </div>

              <div className="col">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="check12"
                    checked={isCruiseControl}
                    onChange={(e) => {
                      setCruiseControl(e.target.checked);
                    }}
                  />
                  <label class="custom-control-label" for="customCheck12">
                    Cruise Control ?
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="check13"
                    checked={isNavigationSystem}
                    onChange={(e) => {
                      setNavigationSystem(e.target.checked);
                    }}
                  />
                  <label class="custom-control-label" for="customCheck13">
                    Navigation System ?
                  </label>
                </div>
              </div>

              <div className="col">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="check14"
                    checked={isPowerAdjustableMirrors}
                    onChange={(e) => {
                      setPowerAdjustableMirrors(e.target.checked);
                    }}
                  />
                  <label class="custom-control-label" for="customCheck14">
                    Power Adjustable Mirrors ?
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="check14"
                    checked={isSunroof}
                    onChange={(e) => {
                      setSunroof(e.target.checked);
                    }}
                  />
                  <label class="custom-control-label" for="customCheck14">
                    Sunroof ?
                  </label>
                </div>
              </div>

              <div className="col">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="check15"
                    checked={isAirbags}
                    onChange={(e) => {
                      setAirbags(e.target.checked);
                    }}
                  />
                  <label class="custom-control-label" for="customCheck15">
                    Airbags ?
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="check16"
                    checked={isSeatBelt}
                    onChange={(e) => {
                      setSeatBelt(e.target.checked);
                    }}
                  />
                  <label class="custom-control-label" for="customCheck16">
                    Seatbelts ?
                  </label>
                </div>
              </div>

              <div className="col">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input me-2"
                    id="check17"
                    checked={isCentralLocking}
                    onChange={(e) => {
                      setCentralLocking(e.target.checked);
                    }}
                  />
                  <label class="custom-control-label" for="customCheck17">
                    Central Locking ?
                  </label>
                </div>
              </div>
            </div>

            <center>
              <div className="mb-4">
                <button className="btn btn-success mt-3" onClick={onSell}>
                  Sell
                </button>
                <button className="btn btn-danger ms-3 mt-3">Cancel</button>
              </div>
            </center>

            {/* col-8 */}
          </div>

          {/* col-2 */}
          <div className="col-2"></div>
        </div>
      </div>

      <br />
      <Footer />
    </div>
  );
}
