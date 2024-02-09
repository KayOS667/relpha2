import Image from "next/image";

type ImgButtonProps = {
    type: "button" | "submit";
    title: string;
    icon: string;
    isRounded: boolean;
    variant?: string;
}

const ImgButton = ({type, title, icon, isRounded, variant}: ImgButtonProps) => {
    let edge: string = "";
    if(isRounded == true) edge = "rounded-full";
    return (
        <figure className="text-center">
            <button
                className={`w-full gap-3 ${edge} border ${variant}`}
                type={type}
            >
                <Image src={icon} alt={title} width={24} height={24}/>
            </button>
            <figcaption className="regular-16 whitespace-nowrap">{title}</figcaption>
        </figure>
  )
}

export default ImgButton