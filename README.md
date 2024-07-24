# File picker for leva

## API

```tsx

filePicker({
    onChange: (file: File) => void,
    accept?: string,
})

```

```tsx
import { filePicker } from "leva-file-picker";

function onChange(file: File) {
  // do something with file
}

const controls = useControls({
  File: filePicker({ onChange }),
});
```
