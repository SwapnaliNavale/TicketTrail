import React, { useState } from "react";
import { toast } from "react-toastify";

function TicketData(){
    const[passengerName, setPassengerName] = useState('')
    const[gender, setGender] = useState('')
    const[age, setAge] = useState('')
    const[address, setAddress] = useState('')
    const[email, setEmail] = useState('')
    const[mobileNo, setMobileNo] = useState('')

    const paymentDeatils = {
        totalamount : "$500",
    };
     const{totalamount} = paymentDeatils;
    
    

    const onTicketData = () =>{
        if(passengerName.length == 0){
            toast.warning('Please enter the passenger name')
        }else if(gender == 'default'){
            toast.warning('select the gender')
        }else if(age.length == 0){
            toast.warning('Please enter the age')
        }else if(address.length == 0){
            toast.warning('Please enter the state')
        }else if(email.length == 0){
            toast.warning('Please enter the email')
        }else if(mobileNo.length == 0 || mobileNo.length>10){
            toast.warning('Please enter the mobile number')
        }
    }

    return(
    //     <div className='container p-4 mt-4 '>
    //         <div className='row'>
    //         <h2 className='text-center'>Passenger Details</h2>
    //             <div className='col-3'></div>
    //             <div className='col-6 rounded p-4 h-100 shadow'>
                    
    //                 <div className='row'>
    //                     <div className='col'>
    //                         <div className='mb-4'>
    //                             <label>Passenger Name</label>
    //                             <input 
    //                             onchange={(e)=>setPassengerName(e.target.value)}
    //                             type='text'
    //                             className='form-control'/>
    //                         </div>
    //                     </div>
    //                 <div className='row'>
    //                     <div className='col'>
    //                         <div className='mb-4'>
    //                             <label htmlFor=''>Gender</label>
    //                             <select
    //                              onChange={(e) => setGender(e.target.value)}
    //                              type='select'
    //                             className='form-control'
    //                             >
    //                             <option value = "default">Select the gender</option>
    //                             <option value = "Male">Male</option>
    //                             <option value = "Female">Female</option>
    //                             <option value = "Other">Other</option>
    //                             </select> 
    //                         </div>
    //                     </div>
    //                     <div className='col'>
    //                         <div className='mb-4'>
    //                             <label htmlFor=''>Age</label>
    //                             <input 
    //                             onchange={(e) => setAge(e.target.value)}
    //                             type="number"
    //                             className='form-control'
    //                             />
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className='row'>
    //                     <div className='col'>
    //                         <div className='mb-4'>
    //                         <label htmlFor=''>State of Residence</label>
    //                             <input 
    //                             onchange={(e) => setAddress(e.target.value)}
    //                             type="text"
    //                             className='form-control'
    //                             /> 
    //                         </div>
    //                     </div>
    //                 </div>
                    
    //             </div>
    //         </div>
    //     </div>
    //     <div className='container p-4 mt-4'>
    //         <div className='row'>
    //             <h2 className='text-center'>Contact Details</h2>
    //             <div className='col-3'></div>
    //             <div className='col-6 rounded p-4 h-100 shadow'>
    //                 <div className = 'row'>
    //                     <div className = 'col'>
    //                         <div className = 'mb-4'>
    //                             <label htmlFor=''>Email</label>
    //                             <input
    //                             onchange={(e)=>setEmail(e.target.value)}
    //                             type='email'
    //                             className='form-control'
    //                             />
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className = 'row'>
    //                     <div className = 'col'>
    //                         <div className = 'mb-4'>
    //                             <label htmlFor=''>Mobile No</label>
    //                             <input
    //                             onchange={(e)=>setMobileNo(e.target.value)}
    //                             type='Number'
    //                             className='form-control'
    //                             />
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div className = 'row'>
    //         <div className='col-3'></div>
    //         <div className='col-6'>
    //             <div className='row'>
    //                 <div className='col'>
    //                     <div className='mb-4'>
    //                         <strong>Total Amount : </strong>
                            
    //                     </div>
    //                 </div>
    //                 <div className='col'>
    //                     <div className='mb-4'>
    //                         <button onClick={onTicketData} className='btn btn-warning'>
    //                             Proceed to Pay
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div className="container p-4 mt-4">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="border rounded p-4 shadow">
                <h2 className="text-center mb-4">Passenger Details</h2>
                <div className="mb-3">
                    <label>Passenger Name</label>
                    <input
                        onChange={(e) => setPassengerName(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Gender</label>
                        <select onChange={(e) => setGender(e.target.value)} className="form-control">
                            <option value="default">Select the gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Age</label>
                        <input
                            onChange={(e) => setAge(e.target.value)}
                            type="number"
                            className="form-control"
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <label>State of Residence</label>
                    <input
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>

                <h2 className="text-center mb-4">Contact Details</h2>

                <div className="mb-3">
                    <label>Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label>Mobile No</label>
                    <input
                        onChange={(e) => setMobileNo(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>

                <div className="row align-items-center">
                    <div className="col">
                        <strong>Total Amount:</strong>
                        {totalamount}
                    </div>
                    <div className="col text-end">
                        <button onClick={onTicketData} className="btn btn-warning">
                            Proceed to Pay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default TicketData