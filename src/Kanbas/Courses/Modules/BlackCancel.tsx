import { TiCancel } from "react-icons/ti";
import { FaCircle } from "react-icons/fa";

export default function BlackCancel() {
    return (
      <span className="me-1 position-relative">
        <TiCancel style={{ top: "0px", left: "-2px" }}
          className="text-black me-1 position-absolute fs-4" />
        <FaCircle className="text-white me-1 fs-6" />
      </span>
    );
  }