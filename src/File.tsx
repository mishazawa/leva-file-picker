import React from "react";

import { useCallback } from "react";
import { useInputContext, Components } from "leva/plugin";
import { useDropzone } from "react-dropzone";
import { DropZone, FileContainer, Instructions, Remove } from "./StyledFile";

export function FileComponent() {
  const { label, value, onUpdate, disabled } = useInputContext<any>();

  const onDrop = useCallback(
    (acceptedFiles: string | any[]) => {
      if (acceptedFiles.length) onUpdate(acceptedFiles[0]);
    },
    [onUpdate]
  );

  const clear = useCallback(
    (e: { stopPropagation: () => void }) => {
      e.stopPropagation();
      onUpdate(undefined);
    },
    [onUpdate]
  );

  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    maxFiles: 1,
    onDrop,
    disabled,
  });

  const { Label, Row } = Components;
  return (
    <Row input>
      <Label>{label}</Label>
      <FileContainer fullwidth={!!value}>
        {value && <div>{value?.name}</div>}
        {value && <Remove onClick={clear} disabled={!value} />}
        {!value && (
          <DropZone {...(getRootProps({ isDragAccept }) as any)}>
            <input {...getInputProps()} />
            <Instructions>
              {isDragAccept ? "drop file" : "click or drop"}
            </Instructions>
          </DropZone>
        )}
      </FileContainer>
    </Row>
  );
}
