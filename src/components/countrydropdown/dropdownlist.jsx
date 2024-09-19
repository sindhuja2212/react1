import React, { useState } from "react";

const countryStateMapping = {
  USA: ["California", "Texas", "Florida", "New York"],
  Canada: ["Ontario", "Quebec", "British Columbia"],
  Australia: ["New South Wales", "Victoria", "Queensland"],
  India: ["Telangana", "AndhraPradesh", "Delhi" ,"Goa"],
};

const CountryStateDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [stateOptions, setStateOptions] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setStateOptions(countryStateMapping[country] || []);
    setSelectedState(""); 
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div>
      <label>
        Select Country:
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select a country</option>
          {Object.keys(countryStateMapping).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>

      {selectedCountry && (
        <label>
          Select State:
          <select value={selectedState} onChange={handleStateChange}>
            <option value="">Select a state</option>
            {stateOptions.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>
      )}

      {selectedCountry && selectedState && (
        <div>
          <h3>
            You selected {selectedState} from {selectedCountry}
          </h3>
        </div>
      )}
    </div>
  );
};

export default CountryStateDropdown;