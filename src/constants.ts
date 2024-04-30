import MessageNode from "./components/Nodes/Message";
import { CustomNodeTypes } from "./types";

export const CUSTOM_NODE_TYPES: Record<CustomNodeTypes, () => JSX.Element> = {
  message: MessageNode,
};
