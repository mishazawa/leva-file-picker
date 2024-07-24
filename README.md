# File picker for leva

```sh 
npm i leva-file-picker
```

## API

```tsx

filePicker({
    onChange: (file: File) => void,
    accept?: Record<string, string[]>,
})

```

```tsx
import { filePicker } from "leva-file-picker";

function onChange(file: File) {
  // do something with file
}

const accept = {
    "text/csv": [".csv"]
};

const controls = useControls({
    File: filePicker({ onChange, accept }),
});
```

### Maintenance

- clone `leva` original repo

- drop this repo to `/packages` dir

- `yarn` from root dir

- `cd packages/leva-file-picker`

- `npm version <major|minor|patch>`

- `npm publish`
