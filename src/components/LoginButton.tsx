import { useAuth0 } from "@auth0/auth0-react";
import Button from "./Button";

export default function LoginButton() {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button onClickHandler={() => loginWithRedirect()}>
            Log in
        </Button>
    ); 
}