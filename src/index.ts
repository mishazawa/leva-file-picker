import { normalize } from "./file-props";
import { FileComponent } from "./File";
import { createPlugin } from "leva/plugin";

export const pluginFile = createPlugin({
  normalize,
  component: FileComponent,
});
