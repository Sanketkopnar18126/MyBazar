import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeproduct } from "../../Slice/AddProduct";

import { MdOutlineStar } from "react-icons/md";

export const Product = () => {
  const useSelect = useSelector((items) => items.productAdd);
  const dispatch = useDispatch();


const [count,setcount]=useState(0)

const onHandleDecrement=()=>{
  if(count>0){
    setcount(count-1)
  }
}


  useEffect(() => {
    return () => dispatch(removeproduct());
  }, [dispatch]);

  return (
    <>
      {useSelect.length === 0 ? (
        <div>No Product Select</div>
      ) : (
        <div>
          <div>
            {useSelect.map((items) => (
              <div key={items.id} className="flex">
                <div className="ml-11 w-[372px] h-[470px] mt-16 mb-[92px]">
                  <img
                    src={items.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />

                  <div className="relative bottom-[450px] left-[250px]">
                    {items.isNew && (
                      <p className="bg-gray-800 rounded-2xl text-white w-16 h-6 text-center">
                        New
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-16 ml-6">
                  <h2 className="text-4xl font-semibold mt-7">{items.title}</h2>

                  <div className=" flex gap-5 mt-5 items-center ">
                    <p className="line-through text-gray-500 text-[24px] ">
                      {" "}
                      ${items.oldPrice}
                    </p>
                    <p className="font-semibold text-gray-900 text-[28px] ">
                      ${items.price}
                    </p>
                  </div>

                  <div>
                    <div className="flex  mt-3 items-center x">
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />

                      <div className="ml-2 text-gray-500">
                        <p>1 Customer Review</p>
                      </div>
                    </div>

                    <div className="text-gray-500 mt-8 ">
                      <p className="w-2/3">{items.description}</p>
                    </div>
                  </div>

                  <div className="flex mt-5 justify-between w-[13%] items-center">
                    <div className="text-sm">Quantity</div>

                    <div  className=" flex gap-4">
                      <button onClick={()=>setcount((prev)=>prev+1)} >+</button>
                      <span>{count}</span>
                      <button onClick={onHandleDecrement}>-</button>
                    </div>
                  </div>


                  <div className="flex  mt-10">
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  w-[227px] h-[50px] text-[20px]"
                >
                  Add to Cart
                </button>
              </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
