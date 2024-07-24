# File picker for leva

## API

```tsx

pluginFile({
    onChange: (file: File) => void,
    accept?: string,
})

```

```tsx
import { pluginFile } from "plugin-file";

function onChange(file: File) {
  // do something with file
}

const controls = useControls({
  File: pluginFile({ onChange }),
});
```
