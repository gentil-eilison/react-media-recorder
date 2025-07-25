import TypographyH1 from "./TypographyH1";

export default function LoginWarning() {
    return (
        <div id="login-warning" className="p-8 flex flex-col items-center">
            <TypographyH1>
                You Should Login to Get Access to the<span className="text-red-500">Recorder</span>
            </TypographyH1>
            <img 
                width={520} 
                src="/woman-facing-warning-sign.svg" 
                alt="Woman facing a warning triangle with her back to us"
                className="mt-10"
            />
        </div>
    );
}