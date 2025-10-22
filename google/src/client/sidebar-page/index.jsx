import { createRoot } from "react-dom/client";
import Shared from "../../../../shared";

const container = document.getElementById("index");
const root = createRoot(container);
root.render(<Shared />);
