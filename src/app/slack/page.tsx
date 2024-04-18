import Slack from "@/app/slack/Slack";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Slack App | Revoluspace",
	description: "Build stronger connections and improve office experience with a solution entirely integrated within Slack and Microsoft Teams",
};

export default function Page() {
	return <Slack />
}