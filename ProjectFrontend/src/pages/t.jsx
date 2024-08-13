import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getBrandFData, getModelData, getVariantData } from "../services/car";
import { useEffect, useState } from "react";
import { Select } from "../components/Select";
import SelectOption from "../components/SelectOption";
import axios from "axios";
import { toast } from "react-toastify";
import FeatureCheckbox from "../components/FeatureCheckBox";

export default function Sell() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [variants, setVariants] = useState([]);

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const [carNumber, setCarNumber] = useState("");
  const [carOwnership, setCarOwnership] = useState("");
  const [RTOLocation, setRTOLocation] = useState("");
  const [kmDriven, setKmDriven] = useState("");
  const [manufacturingYear, setManufacturingYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [color, setColor] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [primaryImage, setPrimaryImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);

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


  const cities = [
        "Mumbai",
        "Delhi",
        "Bangalore",
        "Chennai",
        "Kolkata",
        "Hyderabad",
        "Pune",
        "Ahmedabad",
        "Jaipur",
        "Lucknow",
        "Kanpur",
        "Nagpur",
        "Indore",
        "Bhopal",
        "Coimbatore",
      ];

  useEffect(() => {
    const fetchBrand = async () => {
      const data = await getBrandFData();
      setBrands(data);
    };
    fetchBrand();
  }, []);

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

  const onSell = async () => {
    // Validate number of additional images
    if (additionalImages.length > 4) {
      toast.warn("You can only upload up to 4 additional images.");
      return;
    }

    // Validate size of additional images
    const maxFileSize = 5 * 1024 * 1024; // 5 MB in bytes
    for (const image of additionalImages) {
      if (image.size > maxFileSize) {
        toast.warn("Each additional image must be less than 5 MB.");
        return;
      }
    }

    // Creating the CarRequestDTO
    const carRequestDTO = {
      userId: 1,
      modelId: selectedVariant,
      carNumber: carNumber,
      isInsurance: isInsured,
      rtoLocation: RTOLocation,
      carOwnership: carOwnership,
      carMfgYear: manufacturingYear,
      kmsDriven: kmDriven,
      carMilage: mileage,
      carColor: color,
      carSellingPrice: sellingPrice,
      modelSpecification: {
        isPowerSteering: isPowerSteering,
        isPowerWindows: isPowerWindows,
        isAirConditioner: isAirConditioner,
        isAdjustableHeadLights: isAdjustableHeadLight,
        isFogLights: isFogLights,
        isABS: isABS,
        isBrakeAssist: isBrakeAssist,
        isMusicSystem: isMusicSystem,
        isSpeakers: isSpeakers,
        isAdjustableSeats: isAdjustableSeats,
        isCruiseControl: isCruiseControl,
        isNavigationSystem: isNavigationSystem,
        isPowerAdjustableMirrors: isPowerAdjustableMirrors,
        isSunroof: isSunroof,
        isAirBags: isAirbags,
        isSeatBelt: isSeatBelt,
        isCentralLocking: isCentralLocking,
      },
    };

    // Create FormData to hold the DTO and the images
    const formData = new FormData();
    // Append DTO as JSON string
    formData.append("dto", JSON.stringify(carRequestDTO));

    // Append primary image as coverImage
    if (primaryImage) {
      formData.append("coverImage", primaryImage);
    }

    // Append additional images with the same key name
    additionalImages.forEach((image) => {
      formData.append("images", image);
    });
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
          <div className="col-2"></div>
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
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="carNumber">Car Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={carNumber}
                    onChange={(e) => setCarNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="RTO">RTO Location</label>
                  <select
                    className="form-select"
                    id="RTO"
                    value={RTOLocation}
                    onChange={(e) => setRTOLocation(e.target.value)}
                  >
                    <SelectOption cities={cities} />
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="kmDriven">Kilometers Driven</label>
                  <input
                    type="number"
                    className="form-control"
                    value={kmDriven}
                    onChange={(e) => setKmDriven(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="ownership">Ownership</label>
                  <input
                    type="text"
                    className="form-control"
                    value={carOwnership}
                    onChange={(e) => setCarOwnership(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="mileage">Mileage</label>
                  <input
                    type="number"
                    className="form-control"
                    value={mileage}
                    onChange={(e) => setMileage(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="manufacturingYear">Manufacturing Year</label>
                  <input
                    type="number"
                    className="form-control"
                    value={manufacturingYear}
                    onChange={(e) => setManufacturingYear(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="color">Color</label>
                  <input
                    type="text"
                    className="form-control"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="sellingPrice">Selling Price</label>
                  <input
                    type="number"
                    className="form-control"
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="primaryImage">Primary Image</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={(e) => setPrimaryImage(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="additionalImages">Additional Images</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    multiple
                    onChange={(e) => {
                      const files = Array.from(e.target.files);
                      const validFiles = files.filter(
                        (file) => file.size < 5 * 1024 * 1024
                      ); // Filter files less than 5 MB
                      if (validFiles.length > 4) {
                        alert("You can only upload up to 4 additional images.");
                        return;
                      }
                      setAdditionalImages(validFiles);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Feature checkBoxes */}

            <div className="row">
              <div className="col">
                <FeatureCheckbox
                  id="check1"
                  label="Is insured ?"
                  checked={isInsured}
                  onChange={(e) => setInsured(e.target.checked)}
                />
              </div>
              <div className="col">
                <FeatureCheckbox
                  id="check2"
                  label="Power Steering ?"
                  checked={isPowerSteering}
                  onChange={(e) => setPowerSteering(e.target.checked)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <FeatureCheckbox
                  id="check3"
                  label="Power Windows ?"
                  checked={isPowerWindows}
                  onChange={(e) => setPowerWindows(e.target.checked)}
                />
              </div>
              <div className="col">
                <FeatureCheckbox
                  id="check4"
                  label="Air Conditioner ?"
                  checked={isAirConditioner}
                  onChange={(e) => setAirConditioner(e.target.checked)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <FeatureCheckbox
                  id="check5"
                  label="Adjustable Head Light ?"
                  checked={isAdjustableHeadLight}
                  onChange={(e) => setAdjustableHeadLight(e.target.checked)}
                />
              </div>
              <div className="col">
                <FeatureCheckbox
                  id="check6"
                  label="Fog Lights ?"
                  checked={isFogLights}
                  onChange={(e) => setFogLights(e.target.checked)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <FeatureCheckbox
                  id="check7"
                  label="ABS available ?"
                  checked={isABS}
                  onChange={(e) => setABS(e.target.checked)}
                />
              </div>
              <div className="col">
                <FeatureCheckbox
                  id="check8"
                  label="Brake Assist ?"
                  checked={isBrakeAssist}
                  onChange={(e) => setBrakeAssist(e.target.checked)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <FeatureCheckbox
                  id="check9"
                  label="Music System ?"
                  checked={isMusicSystem}
                  onChange={(e) => setMusicSystem(e.target.checked)}
                />
              </div>
              <div className="col">
                <FeatureCheckbox
                  id="check10"
                  label="Speakers ?"
                  checked={isSpeakers}
                  onChange={(e) => setSpeakers(e.target.checked)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <FeatureCheckbox
                  id="check11"
                  label="Adjustable Seats ?"
                  checked={isAdjustableSeats}
                  onChange={(e) => setAdjustableSeats(e.target.checked)}
                />
              </div>
              <div className="col">
                <FeatureCheckbox
                  id="check12"
                  label="Cruise Control ?"
                  checked={isCruiseControl}
                  onChange={(e) => setCruiseControl(e.target.checked)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <FeatureCheckbox
                  id="check13"
                  label="Navigation System ?"
                  checked={isNavigationSystem}
                  onChange={(e) => setNavigationSystem(e.target.checked)}
                />
              </div>
              <div className="col">
                <FeatureCheckbox
                  id="check14"
                  label="Power Adjustable Mirrors ?"
                  checked={isPowerAdjustableMirrors}
                  onChange={(e) => setPowerAdjustableMirrors(e.target.checked)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <FeatureCheckbox
                  id="check15"
                  label="Sunroof ?"
                  checked={isSunroof}
                  onChange={(e) => setSunroof(e.target.checked)}
                />
              </div>
              <div className="col">
                <FeatureCheckbox
                  id="check16"
                  label="Airbags ?"
                  checked={isAirbags}
                  onChange={(e) => setAirbags(e.target.checked)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <FeatureCheckbox
                  id="check17"
                  label="Seatbelts ?"
                  checked={isSeatBelt}
                  onChange={(e) => setSeatBelt(e.target.checked)}
                />
              </div>
              <div className="col">
                <FeatureCheckbox
                  id="check18"
                  label="Central Locking ?"
                  checked={isCentralLocking}
                  onChange={(e) => setCentralLocking(e.target.checked)}
                />
              </div>
            </div>

            {/* -------- */}
            <div className="text-center mt-4">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onSell}
              >
                List Car
              </button>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
