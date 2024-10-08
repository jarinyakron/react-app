import LogoutButton from "../pages/Logout";

function Header() {
    return (
        <>
            <header className="bg-teal-300 p-4 flex justify-between">
                <h1 className="text-xl font-blod">KSU Computer Engineering</h1>
                <div>
                    <LogoutButton/>
                </div>
            </header>
        </>
    );
}
export default Header;