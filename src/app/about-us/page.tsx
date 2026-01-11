import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
    title: "About Us | Viralcrest",
    description:
        "Learn about Viralcrest, a results-focused digital marketing agency. We specialize in performance marketing, web development, and AI automation.",
};

export default function Page() {
    return <AboutPage />;
}
