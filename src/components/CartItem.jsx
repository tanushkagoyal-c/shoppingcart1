
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className=" flex justify-between  w-full border">

      <div className=" flex justify-evenly border-solid border-2 border-blue-600 ">

        <div className="h-[180px] ">
          <img src={item.image} className="h-full  max-w-md border-solid border-2 border-red-600" />
        </div>
        <div className="flex flex-col justify-between items-center object-contain w-35">
          <h1 className="border-dashed border-2 border-indigo-600 color font-bold text-blue-600">{item.title}</h1>
          <h1 >{item.description}</h1>
          <div className="flex-row">
            <p className="border-solid border-2 border-red-600 text-red-600 ">{item.price}</p>
            <div className="hover:scale-150"
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>
<br />
    </div>
  );
};

export default CartItem;
