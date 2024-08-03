import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Sell() {

  // dummy data

  const brands1 = [
    { carBrand: "Toyota" },
    { carBrand: "Honda" },
    { carBrand: "Ford" },
  ];

  const models1 = [
    { carModel: "Corolla" },
    { carModel: "Camry" },
    { carModel: "RAV4" },
    { carModel: "Civic" },
    { carModel: "Accord" },
    { carModel: "CR-V" },
    { carModel: "Fiesta" },
    { carModel: "Focus" },
    { carModel: "Mustang" },
  ];

  const variants1 = [
    { "carVariant": "LE" },
    { "carVariant": "SE" },
    { "carVariant": "XLE" },
    { "carVariant": "LX" },
    { "carVariant": "EX" },
    { "carVariant": "Sport" },
    { "carVariant": "S" },
    { "carVariant": "SE" },
    { "carVariant": "ST" }
  ]
  //  ----------------------------------------------------------------------------------------

  // for select-options

  const [brands , setBrands]=






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




  



  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <h3 style={{ fontWeight: "bold", color: "steelblue" }}>
          <center>Sell Car</center>
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

              {/* row-1 */}
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

            <h5>Currently available features :: </h5>

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
                <button className="btn btn-success mt-3">Sell</button>
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
