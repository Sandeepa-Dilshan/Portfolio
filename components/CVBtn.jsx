import { FiDownload } from "react-icons/fi";
import { Button } from "./ui/button";
import MotionBtn from "./MotionBtn";

const CVBtn = () => {
  return (
    <MotionBtn>
      <Button
        variant="outline"
        size="lg"
        className="uppercase flex items-center gap-2 btn"
      >
        <span>Download CV</span>
        <FiDownload className="text-xl" />
      </Button>
    </MotionBtn>
  );
};

export default CVBtn;
