import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { PlusIcon } from "../../components/icons/PlusIcon";
import { FC, useState } from "react";

interface Props {
  startLabel: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ButtonUpload: FC<Props> = ({
  startLabel,
  className,
  onChange,
}) => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const [state, setState] = useState(startLabel);

  return (
    <Button
      className={className}
      style={{ width: "100%" }}
      component="label"
      role={undefined}
      variant="outlined"
      tabIndex={-1}
      startIcon={<PlusIcon />}
      size="large"
    >
      {state}
      <VisuallyHiddenInput
        type="file"
        onChange={async (e) => {
          onChange && onChange(e);
          e.target.files && setState(e.target.files[0].name);
        }}
      />
    </Button>
  );
};
