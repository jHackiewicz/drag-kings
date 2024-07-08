import { ButtonWithIcon } from "@/components/ui/";
import { useTranslation } from "react-i18next";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { useTheme } from "@mui/material/styles";
import { ButtonGroup } from "@mui/material";

function Dashboard() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{t("dashboard")}</p>
      <ButtonGroup
        disableRipple
        size="large"
        orientation="vertical"
        disableElevation
      >
        <ButtonWithIcon
          backgroundColor={theme.palette.secondary.main}
          startIcon={<AddCircleOutlineRoundedIcon />}
        >
          Add task
        </ButtonWithIcon>
        <ButtonWithIcon
          backgroundColor={theme.palette.warning.main}
          startIcon={<EditIcon />}
          disabled
        >
          Edit task
        </ButtonWithIcon>
        <ButtonWithIcon
          backgroundColor={theme.palette.error.main}
          startIcon={<DeleteForeverRoundedIcon />}
          sx={{
            "& > button": {
              borderColor: "#000",
            },
          }}
        >
          delete task
        </ButtonWithIcon>
      </ButtonGroup>
    </div>
  );
}

export default Dashboard;
