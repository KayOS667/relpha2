import Image from "next/image";

type ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon?: string;
    isRounded: boolean;
    variant?: string;
}

const Button = ({type, title, icon, isRounded, variant}: ButtonProps) => {
    let edge: string = "";
    if(isRounded == true) edge = "rounded-full";

    return (
      <button
          className={`flexCenter gap-3 ${edge} border ${variant}`}
          type={type}
      >
          {icon && <Image src={icon} alt={title} width={24} height={24}/>}
          <label className="regular-16 whitespace-nowrap cursor-pointer">{title}</label>
      </button>
    )
  }

export default Button