import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<section className="">
				<div className="flex flex-col items-center">
					<h1 className="text-center order-1">
						Welcome to RelphaCare Pod
					</h1>
					<p className="text-center order-2">
						Discover care that listens to you!
						<br/>
						Welcome to a new kind of health experience!
					</p>
					<div className="order-3">
						<Link href="/WellnessPortal">
							<Button
								type = "button"
								title = "Begin my wellness journey!!"
								isRounded = {false}
								variant = "btn_gray"
							/>
						</Link>
					</div>
					<p className="order-4">
						OR
					</p>
					<div className="order-5">
						<Link href="/ThankYou">
							<Button
								type = "button"
								title = "I just want a quiet place to work."
								isRounded = {false}
								variant = "btn_gray"
							/>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}