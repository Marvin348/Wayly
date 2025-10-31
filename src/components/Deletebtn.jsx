import { FaRegTrashCan } from "react-icons/fa6";

const Deletebtn = ({ deleteItem }) => {
  return (
    <button
      className="cursor-pointer text-gray-500 hover:text-gray-700"
      onClick={deleteItem}
    >
      <FaRegTrashCan />
    </button>
  );
};
export default Deletebtn;
