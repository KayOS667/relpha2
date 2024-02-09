export interface ImageLink {
    href: string;
    type: "button" | "submit";
    title: string;
    icon: string;
    isRounded: boolean;
    variant: string;
}

export interface Category {
    categoryName: string;
}

export const WellnessPortal_Options: ImageLink[] = [
    {
        href: "../WellnessPortal/Music",
        type: "button",
        title: "Music",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title:"Medication",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "../WellnessPortal/Exercises",
        type: "button",
        title:"Exercises",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "../WellnessPortal/Fragrances",
        type: "button",
        title:"Fragrances",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title:"Puzzles",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title:"Books",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title:"Videos",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title:"Calming Noises",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
];

export const Exercise_Options: ImageLink[] = [
    {
        href: "/",
        type: "button",
        title: "Yoga",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title: "Treadmill",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title: "Cycling",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title: "Stretching",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
];

/*
export const Music_Categories: Category[] = [
    {
        categoryName: "Nature"
    },
    {
        categoryName: "Instrumental"
    },
    {
        categoryName: "Random"
    },
];

function getMusicCategory(categoryName: string){
    return (
        Music_Categories.find((category) => {
            return category.categoryName === categoryName;
        })
    )
}

export let getMusicCategory2 = Music_Categories.find((category) => {
    return category.categoryName === "Nature";
});
*/

export const Nature_Sounds: ImageLink[] = [
    {
        href: "/",
        type: "button",
        title: "Rainfall",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title: "Waves",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title: "Birdsong",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title: "River",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
];

export const Instrumental_Music: ImageLink[] = [
    {
        href: "/",
        type: "button",
        title: "Synthwave",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title: "Jazz",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
];

export const Random_Sounds: ImageLink[] = [
    {
        href: "/",
        type: "button",
        title: "Clock sounds",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title: "Bubbling water",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title: "Crickets",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title: "Thunderstorm",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title: "Heavy rain",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
];

export const Emotion_List: ImageLink[] = [
    {
        href: "/WellnessPortal",
        type: "button",
        title: "Happy",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/WellnessPortal",
        type: "button",
        title: "Sad",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/WellnessPortal",
        type: "button",
        title: "Anxious",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/WellnessPortal",
        type: "button",
        title: "Depressed",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/WellnessPortal",
        type: "button",
        title: "Tired",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/WellnessPortal",
        type: "button",
        title: "Angry",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
];

export const Fragrance_List: ImageLink[] = [
    {
        href: "/",
        type: "button",
        title: "Fragrance 1",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title: "Fragrance 2",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title: "Fragrance 3",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title: "Fragrance 4",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title: "Fragrance 5",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title: "Fragrance 6",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title: "Fragrance 7",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
    {
        href: "/",
        type: "button",
        title: "Fragrance 8",
        icon: "../RelphaCare-logo.svg",
        isRounded: false,
        variant: "btn_gray",
    },
];