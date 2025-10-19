import WalletConnect from "../WalletConnect/index";

export default function Header() {
    return (
        <div className="header-container grid grid-flow-col justify-between items-center p-4 border-b-2">
            <div className="">
                <div className="logo"><img src="/next.svg" className="h-6 dark:hidden" alt="Tailwind Play" /></div>
                <div className="slogan">Your goto Web3 film app</div>
            </div>
            <div className="header-right-section ">
                <WalletConnect />
            </div>
        </div>
    );
};
