import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {removeData} from "../features/user/userSlice";

import { useDispatch, useSelector } from "react-redux";

const UserTable = () => {
    const { userData } = useSelector((store) => store.user);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const location = useLocation()
    useEffect(()=>{
        console.log(userData);
    }, [])
  return (
    <div className="overflow-x-auto">
   
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <Link to={'/adduser'}
                        class="middle none center rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                      >
                        Add User
                      </Link>
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Mob no
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Email
                    </th>

                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Delete
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Details
                    </th>
                    ▐
                  </tr>
                </thead>
                <tbody>
                    {
                        userData.length === 0 ? ('No user found'): ( 
                            userData?.map((user)=>{
                                return  <tr class="bg-gray-100 border-b" key={user?.id}>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {user?.id}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {user?.name}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {user?.email}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {user?.phone}
                                </td>
                              
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  <button
                                    class="middle none center rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    data-ripple-light="true"
                                    onClick={()=>{
                                        dispatch(removeData(user?.id));
                                    }}
                                  >
                                    Delete
                                  </button>
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  <button 
                                  onClick={()=>{
                                    navigate("/user-details", { state: { ...user } });
                                  }}
                                    class="middle none center rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    data-ripple-light="true"
                                    
                                  >
                                    Details
                                  </button>
                                </td>
                              </tr>
                            })
                        )
                    }
                   
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
