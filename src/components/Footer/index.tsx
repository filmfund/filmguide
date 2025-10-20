import Image from "next/image";
import Link from "next/link";

export default function Footer() {

    const socialLinks = [
        {
            name: "Twitter",
            url: "https://x.com/filmfundeth",
            icon: "/twitter.png"
        },
        {
            name: "Telegram",
            url: "https://t.me/filmfundeth",
            icon: "/telegram.png"
        },
        {
            name: "Discord",
            url: "https://discord.com/invite/w5ggt7VfRs",
            icon: "/discord.png"
        },
        {
            name: "Reddit",
            url: "https://www.reddit.com/r/cryptomovie/",
            icon: "/reddit.png"
        },
        {
            name: "GitHub",
            url: "https://github.com/filmfund",
            icon: "/github.png"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/filmfundeth",
            icon: "/instagram.png"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/company/filmfundeth/",
            icon: "/linkedIn.png"
        },
    ];

    return (
        <footer className="py-8 border-t border-[#A60E0E] bg-[#2b2b31]">
            <div className="container mx-auto px-6">
                <div className="flex justify-center items-center gap-6 mb-4">
                    {socialLinks.map((social) => (
                        <Link
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <Image
                                src={social.icon}
                                alt={social.name}
                                width={24}
                                height={24}
                                className="hover:scale-110 transition-transform"
                            />
                        </Link>
                    ))}
                </div>
                <div className="text-center">
                    <p className="text-[#999999] text-sm">
                        Built for ETH Global Hackathon 2025 • Empowering the future of decentralized filmmaking
                    </p>
                </div>
            </div>
        </footer>
    );
}