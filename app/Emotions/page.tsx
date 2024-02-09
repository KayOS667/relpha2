import Link from "next/link"
import { Emotion_List } from "../constants/constants"
import ImgButton from "@/components/ImgButton"

const page = () => {
    return (
        <>
            <section className="flex flex-col flexCenter">
                <div className="pb-3">
                    <h1 className="bold-16">
                        How are you feeling today?
                    </h1>
                    <hr/>
                </div>
                <div className="flex flex-col flex-wrap">
                    <div className="grid grid-cols-6 col-span-2 grid-rows-1 gap-1">
                        {Emotion_List.map((emotion) => (
                            <Link
                                href = {emotion.href}
                                key = {emotion.title} 
                            >
                                <ImgButton
                                    type = {emotion.type}
                                    title = {emotion.title}
                                    icon = {emotion.icon}
                                    isRounded = {emotion.isRounded}
                                    variant = {emotion.variant}
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