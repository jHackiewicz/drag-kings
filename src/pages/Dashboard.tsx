import { useTranslation } from "react-i18next";

function Dashboard() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{t("dashboard")}</p>
    </div>
  );
}

export default Dashboard;
