import Button from "@mui/material/Button";
import { styled, darken } from "@mui/material/styles";

type ButtonWithIconProps = {
  backgroundColor?: string;
  startIcon: React.ReactElement;
};

const ButtonWithIcon = styled(Button)<ButtonWithIconProps>(
  ({ theme, backgroundColor }) => ({
    backgroundColor: backgroundColor || theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: darken(
        backgroundColor || theme.palette.secondary.main,
        0.2
      ),
      boxShadow: "0 8px 30px 0 rgba(0, 0, 0, 0.2)",
    },
    "&:active": {
      boxShadow: "inset 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    },
    fontWeight: 700,
    fontSize: 15,
    letterSpacing: 1,
  })
);

export default ButtonWithIcon;
