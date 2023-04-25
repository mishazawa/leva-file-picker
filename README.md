# File picker for leva

## How to use

```tsx
import { file as filePlugin } from "file-plugin";

function onChange(file: File) {
  // do something with file
}

const controls = useControls({
  File: filePlugin({ onChange }),
});
```
