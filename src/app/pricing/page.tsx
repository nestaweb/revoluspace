import Pricing from "@/app/pricing/Pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Pricing | Revoluspace",
	description: "Build stronger connections and improve office experience with a solution entirely integrated within Slack and Microsoft Teams",
};

export default function Page() {
	return (
		<>
			<Pricing />
		</>
	)
}