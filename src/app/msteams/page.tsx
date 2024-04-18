import MSteams from "@/app/msteams/MSteams";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "MS Teams App | Revoluspace",
	description: "Build stronger connections and improve office experience with a solution entirely integrated within Slack and Microsoft Teams",
};

export default function Page() {
	return <MSteams />
}