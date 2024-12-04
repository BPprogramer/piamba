import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomeView from "./views/HomeView";
import About from "./views/About";
import Projects from "./views/Projects";
import Project from "./views/Project";
import Skills from "./views/Skills";



export default function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/project/:projectId" element={<Project />} />
                    <Route path="/skills" element={<Skills />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
