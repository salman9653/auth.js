export const Header = ({ label }) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-2xl font-semibold drop-shadow-md">Auth Service</h1>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};
