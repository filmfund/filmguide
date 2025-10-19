import WalletConnect from "../WalletConnect/index";

export default function Header() {
    return (
        <div className="header-container grid grid-flow-col justify-between items-center p-4 border-b-2">
            <div className="">
                <div className="logo">Guide2Film3</div>
                <div className="slogan">Your goto Web3 film app</div>
            </div>
            <div className="header-right-section ">
                <WalletConnect />
            </div>
        </div>
    );
};
