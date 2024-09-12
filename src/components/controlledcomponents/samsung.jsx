import { useState, useEffect } from "react";
import axios from "react-axios";

const FormTable = () => {
  const [username, setUsername] = useState("");
  const [model, setModel] = useState("");
  const [mobile, setMobile] = useState("");
  const [complaint, setComplaint] = useState("");

  const [formData, setFormData] = useState([]);
  const [userSpan, setUserSpan] = useState("");
  const [modelSpan, setModelSpan] = useState("");
  const [mobileSpan, setMobileSpan] = useState("");
  const [complaintSpan, setComplaintSpan] = useState("");
  const [formId, setFormId] = useState(1); 

  useEffect(() => {
    const fetchLastId = async () => {
      try {
        const response = await fetch("http://localhost:3000/details");
        const data = await response.json();
        if (data.length > 0) {
          const lastId = data[data.length - 1].id;
          setFormId(lastId + 1); 
        }
      } catch (error) {
        console.error("Error fetching last ID:", error);
      }
    };

    fetchLastId();
  }, []);

  const usernameHandler = (event) => {
    const usernameEntered = event.target.value;
    setUsername(usernameEntered);

    const finalUserError = usernameValidation(usernameEntered);
    setUserSpan(finalUserError);
  };

  const modelHandler = (event) => {
    const modelEntered = event.target.value;
    setModel(modelEntered);

    const finalModelError = modelValidation(modelEntered);
    setModelSpan(finalModelError);
  };

  const mobileHandler = (event) => {
    const mobileEntered = event.target.value;
    setMobile(mobileEntered);

    const finalMobileError = mobileValidation(mobileEntered);
    setMobileSpan(finalMobileError);
  };

  const complaintHandler = (event) => {
    const complaintEntered = event.target.value;
    setComplaint(complaintEntered);

    const finalComplaintError = complaintValidation(complaintEntered);
    setComplaintSpan(finalComplaintError);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (username === "" || model === "" || mobile === "" || complaint === "") {
      infoToast("Please fill out all the fields", "top-right");
      return;
    }
    if (userSpan || modelSpan || mobileSpan || complaintSpan) {
      errorToast("Please enter the correct credentials", "top-right");
      return;
    }

    const formData = {
      id: formId,
      username,
      model,
      mobile,
      complaint,
    };

    try {
      const response = await fetch("http://localhost:3000/details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }


      fetchDetails();

      setFormId(formId + 1);
      setUsername("");
      setModel("");
      setMobile("");
      setComplaint("");
    } catch (error) {
      console.error("Error:", error);
    
    }
  };

  const fetchDetails = async () => {
    try {
      const { data, status } = await axios.get("http://localhost:3000/details");
      if (status === 200) {
        setFormData(data);
      }
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  };

  const usernameValidation = (userErrorChecker) => {
    let finalUserError = "";
    if (userErrorChecker === "") {
      finalUserError = "Please enter Username";
    } else if (userErrorChecker.length > 25) {
      finalUserError = "Username length should be less than 25 characters";
    }
    return finalUserError;
  };

  const modelValidation = (modelErrorChecker) => {
    let finalModelError = "";
    const modelRegex = /^samsung/i;
    if (modelErrorChecker === "") {
      finalModelError = "Please enter your model name";
    } else if (!modelRegex.test(modelErrorChecker)) {
      finalModelError = "Please enter a valid Model name";
    }
    return finalModelError;
  };

  const mobileValidation = (mobileErrorChecker) => {
    const mobileRegex = /^[6-9][0-9]{9}$/;
    let finalMobileError = "";
    if (mobileErrorChecker === "") {
      finalMobileError = "Please enter the mobile number";
    } else if (!mobileRegex.test(mobileErrorChecker)) {
      finalMobileError = "Please enter a valid mobile number";
    }
    return finalMobileError;
  };

  const complaintValidation = (complaintErrorChecker) => {
    let finalComplaintError = "";
    if (complaintErrorChecker === "") {
      finalComplaintError = "Please raise your complaint";
    } else if (
      complaintErrorChecker.length < 50 ||
      complaintErrorChecker.length > 100
    ) {
      finalComplaintError =
        "Your complaint should be more than 50 characters and less than 100 characters";
    }
    return finalComplaintError;
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <h1>Product Complaint Form</h1>
     

      <form onSubmit={submitHandler}>
        <div className="mb-3 mt-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            name="username"
            value={username}
            onChange={usernameHandler}
          />
          <span style={{ color: "red" }}>{userSpan}</span>
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="model" className="form-label">
            Model:
          </label>
          <input
            type="text"
            className="form-control"
            id="model"
            placeholder="Enter model"
            name="model"
            value={model}
            onChange={modelHandler}
          />
          <span style={{ color: "red" }}>{modelSpan}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile Number:
          </label>
          <input
            type="tel"
            className="form-control"
            id="mobile"
            placeholder="Enter mobile number"
            name="mobile"
            value={mobile}
            onChange={mobileHandler}
          />
          <span style={{ color: "red" }}>{mobileSpan}</span>
        </div>

        <div className="form-outline">
          <label className="form-label" htmlFor="complaint">
            Complaint:
          </label>
          <textarea
            className="form-control"
            id="complaint"
            rows={4}
            placeholder="Raise your complaint"
            value={complaint}
            onChange={complaintHandler}
          />
          <span style={{ color: "red" }}>{complaintSpan}</span>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <table style={{ border: "1px solid black", width: "50%" , margin:"50px"}}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black",}}>S.No</th>
            <th style={{ border: "1px solid black",}}>User Name</th>
            <th style={{ border: "1px solid black",}}>Model Name</th>
            <th style={{ border: "1px solid black",}}>Mobile Number</th>
            <th style={{ border: "1px solid black",}}>Complaint</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((each, index) => (
            <tr key={each.id}>
              <td style={{ border: "1px solid black", padding: "2px" }}>
                {each.id}
              </td>
              <td style={{ border: "1px solid black",}}>{each.username}</td>
              <td style={{ border: "1px solid black",}}>{each.model}</td>
              <td style={{ border: "1px solid black",}}>{each.mobile}</td>
              <td style={{ border: "1px solid black",}}>{each.complaint}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FormTable;