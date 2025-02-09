import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { register } from "../Services/user";
import {register} from '../Services/UserServices/user'

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");

  const navigate = useNavigate();
  const onRegister = async () => {
    if (firstName.length === 0) {
      toast.warning("Please enter first name");
    } else if (lastName.length === 0) {
      toast.warning("Please enter last name");
    } else if (email.length === 0) {
      toast.warning("Please enter email");
    } else if (password.length === 0) {
      toast.warning("Please enter password");
    } else if (confirmPassword.length === 0) {
      toast.warning("Please enter confirm password");
    } else if (password != confirmPassword) {
      toast.warning("Password did not matched!!");
    } else if (mobileNo.length === 0) {
      toast.warning("Please enter mobile number");
    } else if (dob.length === 0) {
      toast.warning("Please enter date of birth");
    } else if (gender === "default") {
      toast.warning("Please select gender");
    } else if (age.length === 0) {
      toast.warning("Please Ensure that age should be greater than 0");
    } else if (addressLine1.length === 0) {
      toast.warning("Please enter address line 1");
    } else if (addressLine2.length === 0) {
      toast.warning("Please enter address line 2");
    } else if (city.length === 0) {
      toast.warning("Please enter city");
    } else if (state.length === 0) {
      toast.warning("Please enter state");
    } else if (country === 0) {
      toast.warning("Please enter country");
    } else if (pinCode.length > 6 && pinCode === 0) {
      toast.warning("pincode can not be blank or more than 6 characters!");
    } else {
      // Call register function to consume register API
      const result = await register(
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        mobileNo,
        dob,
        gender,
        age,
        addressLine1,
        addressLine2,
        city,
        state,
        country,
        pinCode
      );
      toast.success("Successfully registered user");
      // Navigate to login component
      navigate("/login");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-12 col-md-8 col-lg-6 rounded p-4 shadow bg-white">
        <h2 className="text-center mb-4">Register</h2>
        <div className="row">
          <div className="col mb-2">
            <label>First Name</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col mb-2">
            <label>Last Name</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
        </div>

        <div className="row">
          <div className="col mb-2">
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col mb-2">
            <label>Mobile No</label>
            <input
              onChange={(e) => setMobileNo(e.target.value)}
              type="number"
              className="form-control"
            />
          </div>
        </div>

        <div className="row">
          <div className="col mb-2">
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
            />
          </div>
          <div className="col mb-2">
            <label>Confirm Password</label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className="form-control"
            />
          </div>
        </div>

        <div className="mb-2">
          <label>Date of Birth</label>
          <input
            onChange={(e) => setDob(e.target.value)}
            type="date"
            className="form-control"
          />
        </div>

        <div className="row">
          <div className="col mb-2">
            <label>Gender</label>
            <select
              onChange={(e) => setGender(e.target.value)}
              className="form-control"
            >
              <option value="default">Select the gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          <div className="col mb-2">
            <label>Age</label>
            <input
              onChange={(e) => setAge(e.target.value)}
              type="number"
              className="form-control"
            />
          </div>
        </div>

        <div className="mb-2">
          <label>Address</label>
          <div className="row">
            <div className="col mb-2">
              <label>Line 1</label>
              <input
                onChange={(e) => setAddressLine1(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col mb-2">
              <label>Line 2</label>
              <input
                onChange={(e) => setAddressLine2(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col mb-2">
              <label>City</label>
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col mb-2">
              <label>State</label>
              <input
                onChange={(e) => setState(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col mb-2">
              <label>Country</label>
              <input
                onChange={(e) => setCountry(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col mb-2">
              <label>Pin Code</label>
              <input
                onChange={(e) => setPinCode(e.target.value)}
                type="number"
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <div className="m-3">
              Already have an account? <Link to="/login">Login here</Link>
            </div>
            <button onClick={onRegister} className="btn btn-success mt-2 w-100">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
