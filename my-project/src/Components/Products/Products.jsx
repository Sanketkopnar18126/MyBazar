import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchPro } from "../../Slice/ProductLoadSlice";
import { addproduct } from "../../Slice/AddProduct";
import { Link } from "react-router-dom";
export const Products = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.LoadProduct);

  useEffect(() => {
    dispatch(FetchPro());
  }, [dispatch]);

  return (
    <>
      <h1 className="bg-black text-white w-1/4 h-20 m-auto text-center text-3xl p-5">
        Shopping EveryDay
      </h1>
      <span className="h-1 w-36 bg-black m-auto flex mt-4   "></span>
      <p className="text-gray-600 text-center m-auto mt-5 w-4/12 mb-6 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, modi
        accusantium corrupti dolor alias nisi enim doloremque placeat accusamus
        fugit provident nihil, id deserunt quae maiores quaerat in aut quo!
      </p>

      <div className="grid grid-cols-5 gap-6 ml-8 mb-12">
        {data.map((items) => (
          <Link key={items.id} to={"/product"}>
            <div
              key={items.id}
              onClick={() => dispatch(addproduct(items))}
              className="w-60 h-[370px] mb-40 mt-10  cursor-pointer  group hover:scale-110 duration-500"
            >
              <img
                src={items.image}
                alt=""
                className="w-full h-full object-cover  "
              />

              <div className="mt-2 flex gap-5 justify-between">
                <h2 className="text-sm font-medium overflow-hidden truncate">
                  {items.title.substring(0, 15)}
                </h2>

                <div className="flex gap-3 ">
                  <p className="line-through text-gray-400">
                    ${items.oldPrice}
                  </p>
                  <p className="font-semibold text-gray-900">${items.price}</p>
                </div>
              </div>

              <div className="absolute top-2 right-3">
                {items.isNew && (
                  <p className="bg-gray-800 rounded-2xl text-white w-16 h-6 text-center">
                    New
                  </p>
                )}
              </div>
              {/* <div className="flex justify-center mt-10">
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  w-35"
                >
                  Add to Cart
                </button>
              </div> */}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
