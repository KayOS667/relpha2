import ImgButton from "@/components/ImgButton"
import Link from "next/link"
import { Instrumental_Music, Nature_Sounds, Random_Sounds } from "../../constants/constants"
//import { getMusicCategory } from "../../constants/constants"

const page = () => {
    return (
        <>
            <section className="flex flex-col flexCenter">
                <div className="pb-3">
                    <h1 className="bold-16 text-center">
                        Music
                    </h1>
                    <hr/>
                </div>
                <div className="flex flex-col flex-wrap">
                    <div className="">
                        <h1 className="bold-16 text-left">
                            Nature
                        </h1>
                        <hr/>
                        <div className="grid grid-cols-4 grid-rows-1 gap-10">
                            {Nature_Sounds.map((category) => (
                                <Link
                                    href = {category.href}
                                    key = {category.title} 
                                >
                                    <ImgButton
                                        type = {category.type}
                                        title = {category.title}
                                        icon = {category.icon}
                                        isRounded = {category.isRounded}
                                        variant = {category.variant}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="">
                        <h1 className="bold-16 text-left">
                            Instrumental
                        </h1>
                        <hr/>
                        <div className="grid grid-cols-2 col-span-2 grid-rows-1 gap-10">
                            {Instrumental_Music.map((category) => (
                                <Link
                                    href = {category.href}
                                    key = {category.title} 
                                >
                                    <ImgButton
                                        type = {category.type}
                                        title = {category.title}
                                        icon = {category.icon}
                                        isRounded = {category.isRounded}
                                        variant = {category.variant}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="">
                        <h1 className="bold-16 text-left">
                            Random
                        </h1>
                        <hr/>
                        <div className="grid grid-cols-5 grid-rows-1 gap-10">
                            {Random_Sounds.map((category) => (
                                <Link
                                    href = {category.href}
                                    key = {category.title} 
                                >
                                    <ImgButton
                                        type = {category.type}
                                        title = {category.title}
                                        icon = {category.icon}
                                        isRounded = {category.isRounded}
                                        variant = {category.variant}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page