import { auth } from "@/lib/auth";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      Settings Page
      <div></div>
      {JSON.stringify(session)}
    </div>
  );
};

export default SettingsPage;
