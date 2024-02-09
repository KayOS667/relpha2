import ImgButton from "@/components/ImgButton"
import Link from "next/link"
import { WellnessPortal_Options } from "../constants/constants"

const page = () => {
    return (
        <>
            <section className="flex flex-col flexCenter">
                <div className="pb-3">
                    <h1 className="bold-16 text-center">
                        Wellness Portal
                    </h1>
                    <hr/>
                </div>
                <div className="flex flex-row flex-wrap">
                    <div className="grid grid-cols-4 grid-rows-2 gap-10">
                        {WellnessPortal_Options.map((option) => (
                            <Link
                                href = {option.href}
                                key = {option.title}
                            >
                                <ImgButton
                                    type = {option.type}
                                    title = {option.title}
                                    icon = {option.icon}
                                    isRounded = {option.isRounded}
                                    variant = {option.variant}
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