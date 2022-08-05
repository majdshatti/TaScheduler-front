import { Box } from "@mui/system";
import { ReactNode } from "react";

type BoxProps = {
  justifyContent?: string;
  alignItems?: string;
  gap?: number | string;
  sx?: any;
};

type ChildrenProps = {
  children: ReactNode;
};

type ColBoxStyles = {
  display: string;
  flexDirection: string;
};

let styles: ColBoxStyles & BoxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
};

const FlexColBox = ({
  justifyContent,
  alignItems,
  gap,
  children,
  sx,
}: BoxProps & ChildrenProps) => {
  if (sx) styles = { ...styles, ...sx };
  if (justifyContent) styles.justifyContent = justifyContent;
  if (alignItems) styles.alignItems = alignItems;

  styles.gap = gap ?? styles.gap;

  return <Box sx={styles}>{children}</Box>;
};

export default FlexColBox;
