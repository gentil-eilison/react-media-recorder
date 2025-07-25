import { useAuth0 } from "@auth0/auth0-react";
import { Film } from "lucide-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import TypographyH1 from "./TypographyH1";

export default function Header() {
    const { isAuthenticated } = useAuth0();

    return (
        <header className="flex justify-between p-4 items-center border-b-2 border-red-500">
            <TypographyH1>
                SVR <Film color={"var(--color-red-500)"} size={64} />
            </TypographyH1>
            { isAuthenticated ? (
                <LogoutButton />
            ) : (
                <LoginButton />
            ) }
        </header>
    );
}