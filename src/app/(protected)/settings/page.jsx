import { logoutAction } from "@/actions/logout";
import { auth } from "@/lib/auth";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      Settings Page
      <div> {JSON.stringify(session)}</div>
      <form action={logoutAction}>
        <button type="submit">Log out </button>
      </form>
    </div>
  );
};

export default SettingsPage;
