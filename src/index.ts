import { normalize } from "./file-props";
import { FileComponent } from "./File";
import { createPlugin } from "leva/plugin";

export const filePicker = createPlugin({
  normalize,
  component: FileComponent,
});
