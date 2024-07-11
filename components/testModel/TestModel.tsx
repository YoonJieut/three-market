import { useRef } from "react";
import ModelView from "./ModelView";
// import someUtils from "@/app/utils";

const TestModel = () => {
  const [someOption, setSomeOption] = useState({
    title: "Test Model",
    color: ["#ff0000", "#00ff00", "#0000ff"],
    // img: someUtils,
  });

  const someRef = useRef();

  return (
    <section>
      <div className="w-full">
        <ModelView></ModelView>
      </div>
    </section>
  );
};

export default TestModel;
