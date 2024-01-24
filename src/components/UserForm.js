import React from "react";
import { useForm } from "react-hook-form";
import { addData } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const UserForm = ()=>{
    const dispatch = useDispatch();
   const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit =  (data) => {
        
        const userData = {
            id: new Date().getTime().toString(),
          name: data.name,
          email: data.email,
          phone: data.phone,
        };
        console.log(userData);
        dispatch(addData(userData));
        navigate('/')
      };
    
    return <div className="flex items-center justify-center p-12">
   
    <div className="mx-auto w-full max-w-[550px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                for="fName"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                 Name
              </label>
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder=" Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                {...register("name", {
                    required: "name is required!",
                  })}
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                for="lName"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email
              </label>
              <input
                type="email"
                name="lName"
                id="lName"
                placeholder="Email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                {...register("email", {
                    required: "email is required!",
                  })}
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label
            for="guest"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Phone number
          </label>
          <input
            type="number"
            name="guest"
            id="guest"
            placeholder="phone"
            min="0"
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            {...register("phone", {
                required: "phone is required!",
              })}
          />
        </div>
  
       
        <div>
          <button
            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
}

export default UserForm