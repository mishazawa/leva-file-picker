# File picker for leva

```tsx
import { pluginFile } from "plugin-file";

function onChange(file: File) {
  // do something with file
}

const controls = useControls({
  File: pluginFile({ onChange }),
});
```
