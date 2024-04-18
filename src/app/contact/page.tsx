import Contact from "@/app/contact/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us | Revoluspace",
	description: "Build stronger connections and improve office experience with a solution entirely integrated within Slack and Microsoft Teams",
};

export default function Page() {
	return <Contact />
}