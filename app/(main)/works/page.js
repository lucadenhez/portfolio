import WorksClient from "./WorksClient";
import { getProjects } from "@/lib/projects";

export default async function WorksPage() {
    const projects = await getProjects();
    return <WorksClient projects={projects} />;
}
