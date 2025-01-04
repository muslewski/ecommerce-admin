import MainNav from "@/components/navigation/main-nav";
import MyAccount from "@/components/navigation/my-account";
import StoreSwitcher from "@/components/navigation/store-switcher";

export default function Navbar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <MyAccount />
        </div>
      </div>
    </div>
  );
}
