import ImgButton from "@/components/ImgButton"
import Link from "next/link"
import { Exercise_Options } from "../../constants/constants"

const page = () => {
    return (
        <>
            <section className="flex flex-col flexCenter">
                <div className="pb-3">
                    <h1 className="bold-16 text-center">
                        Exercises
                    </h1>
                    <hr/>
                </div>
                <div className="flex flex-row flex-wrap">
                    <div className="grid grid-cols-4 grid-rows-1 gap-10">
                        {Exercise_Options.map((option) => (
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
                <div className="pt-3">
                    <p className="regular-14">
                        Please select an option to start an exercise.
                    </p>
                </div>
            </section>
        </>
    )
}

export default page