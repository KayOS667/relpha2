import { Fragrance_List } from "@/app/constants/constants"
import ImgButton from "@/components/ImgButton"
import Link from "next/link"

const page = () => {
    return (
        <>
            <section className="flex flex-col flexCenter">
                <div className="pb-3">
                    <h1 className="bold-16">
                        Choose a soothing fragrance of your choice.
                    </h1>
                    <hr/>
                </div>
                <div className="">
                <div className="grid grid-cols-4 grid-rows-1 gap-10">
                        {Fragrance_List.map((fragrance) => (
                            <Link
                                href = {fragrance.href}
                                key = {fragrance.title} 
                            >
                                <ImgButton
                                    type = {fragrance.type}
                                    title = {fragrance.title}
                                    icon = {fragrance.icon}
                                    isRounded = {fragrance.isRounded}
                                    variant = {fragrance.variant}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default page