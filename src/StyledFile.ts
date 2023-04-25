import { styled } from "leva/plugin";

export const FileContainer = styled("div", {
  position: "relative",
  display: "grid",
  columnGap: "$colGap",
  alignItems: "center",
  variants: {
    fullwidth: {
      true: {
        gridTemplateColumns: "$sizes$rowHeight auto 20px",
      },
    },
  },
});

export const DropZone = styled("div", {
  $flexCenter: "",
  overflow: "hidden",
  height: "$rowHeight",
  background: "$elevation3",
  textAlign: "center",
  color: "inherit",
  borderRadius: "$sm",
  outline: "none",
  userSelect: "none",
  cursor: "pointer",
  $inputStyle: "",
  $hover: "",
  $focusWithin: "",
  $active: "$accent1 $elevation1",
  variants: {
    isDragAccept: {
      true: {
        $inputStyle: "$accent1",
        backgroundColor: "$elevation1",
      },
    },
  },
});

export const Instructions = styled("div", {
  fontSize: "0.8em",
  height: "100%",
  padding: "$rowGap $md",
});

export const Remove = styled("div", {
  $flexCenter: "",
  top: "0",
  right: "0",
  marginRight: "$sm",
  height: "100%",
  cursor: "pointer",

  variants: {
    disabled: {
      true: { color: "$elevation3", cursor: "default" },
    },
  },

  "&::after,&::before": {
    content: '""',
    position: "absolute",
    height: 2,
    width: 10,
    borderRadius: 1,
    backgroundColor: "currentColor",
  },

  "&::after": { transform: "rotate(45deg)" },
  "&::before": { transform: "rotate(-45deg)" },
});
