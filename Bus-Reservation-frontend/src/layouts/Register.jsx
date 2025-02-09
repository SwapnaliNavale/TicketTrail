import { useState } from 'react'
import { toast } from 'react-toastify'

function Register() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [mobile_no, setMobileNo] = useState('')
  const [date_of_birth, setDateOfBirth] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");

  const onRegister = () => {
      if(firstName.length == 0){
          toast.warning('Please enter first name')
      } else if(lastName.length == 0){
        toast.warning('Please enter last name')
      } else if(email.length == 0){
        toast.warning('Please enter email')
      } else if(password.length == 0){
        toast.warning('Please enter password')
      } else if(confirmpassword.length == 0){
        toast.warning('Please enter confirmpassword')
      } else if(mobile_no.length == 0){
        toast.warning('Please enter last name')
      } else if(date_of_birth.length == 0){
        toast.warning('Please enter date of birth')
      } else if(gender.length == 0){
        toast.warning('Please select gender')
      } else if(age.length == 0){
        toast.warning('Please enter age')
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
        // call register function to consume register API
      // const result = await register( firstName,
      //   lastName,
      //   email,
      //   password,
      //   mobileNo,
      //   dateOfBirth,
      //   gender,
      //   age,
      //   addressLine1,
      //   addressLine2,
      //   city,
      //   state,
      //   country,
      //   pinCode)
    //   if (result['status'] == 'success') {
        toast.success('Successfully registered user')

    //     navigate('/login')
    //   } else {
    //     toast.error(result['error'])
    //   }
      }
  }

return(
    <div>
         <h2 className='text-center mb-4'>Register</h2>
    <div className='row'>
    <div className='col-3'></div>
    <div className='col-6 rounded p-4 h-100 shadow'>
    <div className='row'>
    <div className='col'>
        <div className='mb-3'>
          <label htmlFor=''>First Name</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
      </div>
      <div className='col'>
        <div className='mb-3'>
          <label htmlFor=''>Last Name</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='col'>
        <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
      </div>
      <div className='col'>
        <div className='mb-3'>
          <label htmlFor=''>Mobile No</label>
          <input
            onChange={(e) => setMobileNo(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='col'>
        <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>
      </div>
      <div className='col'>
          <div className='mb-3'>
              <label htmlFor=''>Confirmpassword</label>
              <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className='form-control'
              />
          </div>
      </div>
    </div>
    <div className='col'>
        <div className='mb-3'>
          <label htmlFor=''>Date of Birth</label>
          <input
            onChange={(e) => setDateOfBirth(e.target.value)}
            type='date'
            className='form-control'
          />
        </div>
      </div>
    <div className='row'>
      <div className='col'>
        <div className='mb-3'>
          <label htmlFor=''>Gender</label>
          <select
            onChange={(e) => setGender(e.target.value)}
            type='select'
            className='form-control'
          >
            <option value = "default">Select the gender</option>
            <option value = "Male">Male</option>
            <option value = "Female">Female</option>
            <option value = "Other">Other</option>
              </select>    
        </div>
      </div> 
      <div className='col'>
        <div className='mb-3'>
          <label htmlFor=''>Age</label>
          <input
            onChange={(e) => setAge(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
      </div>
    </div>
    <div classNam='row'>
    <div className='row'>
        <label htmlFor=''>Address</label>
        <div className='col'>
            <label htmlFor=''>Line1</label>
            <input
             onChange={(e) => setAddressLine1(e.target.value)}
            type='text'
            className='form-control'
            />
        </div>
        <div className='col'>
            <label htmlFor=''>Line2</label>
            <input 
            onChange={(e) => setAddressLine2(e.target.value)}
             type='text'
             className="form-control"
            />
        </div>
    </div>
    <div className='row'>
    <div className='col'>
            <label htmlFor=''>City</label>
            <input 
            onChange={(e) => setCity(e.target.value)}
             type='text'
             className="form-control"
            />
        </div>
        <div className='col'>
            <label htmlFor=''>State</label>
            <input 
            onChange={(e) => setState(e.target.value)}
             type='text'
             className="form-control"
            />
        </div>
        </div>
        <div className='row'>
    <div className='col'>
            <label htmlFor=''>Country</label>
            <input 
            onChange={(e) => setCountry(e.target.value)}
             type='text'
             className="form-control"
            />
        </div>
        <div className='col'>
            <label htmlFor=''>Pin Code</label>
            <input 
            onChange={(e) => setPinCode(e.target.value)}
             type='number'
             className="form-control"
            />
        </div>
        </div>
        </div>

    <div className='row'>
      <div className='col'>
        {/* <div>
          Already have an account? <Link to='/login'>Login here</Link>
        </div> */}
        <button onClick={onRegister} className='btn btn-success mt-2'>
          Register
        </button>
      </div>
    </div>
  </div>
  <div className='col-3'></div>
</div>
</div>
)
}

export default Register