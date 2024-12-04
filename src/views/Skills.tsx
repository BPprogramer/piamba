import { useState } from "react";
import Skill from "../components/skills/Skill";
import SkillDetail from "../components/skills/SkillDetail";


export default function Skills() {

    const [dataSelected, setDataSelected] = useState<string>('php')

    const handleShowSkillDetails = (data: string) => {
        setDataSelected(data)
    }

    return (
        <section className="mt-10">
            <div className="container mx-auto px-6 max-w-screen-xl">
                <div className="flex justify-between  mb-10">
                    <h2 className="text-4xl  font-extrabold   text-blue-400 capitalize">
                        Habilidades
                    </h2>

                </div>
                <div className="flex flex-col md:flex-row items-start gap-10"> {/* este div debe tener scroll */}
                    <div className="w-full md:w-1/2 ">
                        <div className="h-[500px] overflow-y-scroll scrollbar-hide bg-slate-800 rounded-lg p-6 shadow-md">
                            <ul className="w-full space-y-4">
                                <Skill
                                    icon={"/icons/php.svg"}
                                    name={'php'}
                                    color="bg-blue-500"
                                    percent={"90%"}
                                    handleShowSkillDetails={handleShowSkillDetails}
                                    dataSelected={dataSelected}
                                />
                                <Skill
                                    icon={"/icons/laravel.svg"}
                                    name={'laravel'}
                                    color="bg-red-400"
                                    percent={"85%"}
                                    handleShowSkillDetails={handleShowSkillDetails}
                                    dataSelected={dataSelected}
                                />
                                <Skill
                                    icon={"/icons/js.svg"}
                                    name={'javascript'}
                                    color="bg-yellow-400"
                                    percent={"90%"}
                                    handleShowSkillDetails={handleShowSkillDetails}
                                    dataSelected={dataSelected}
                                />
                                <Skill
                                    icon={"/icons/react.svg"}
                                    name={'react + typescrypt'}
                                    color="bg-yellow-600"
                                    percent={"85%"}
                                    handleShowSkillDetails={handleShowSkillDetails}
                                    dataSelected={dataSelected}
                                />
                                <Skill
                                    icon={"/icons/node.svg"}
                                    name={'node'}
                                    color="bg-green-400"
                                    percent={"70%"}
                                    handleShowSkillDetails={handleShowSkillDetails}
                                    dataSelected={dataSelected}
                                />
                                <Skill
                                    icon={"/icons/express.svg"}
                                    name={'express + typescrypt'}
                                    color="bg-green-600"
                                    percent={"70%"}
                                    handleShowSkillDetails={handleShowSkillDetails}
                                    dataSelected={dataSelected}
                                />
                                <Skill
                                    icon={"/icons/mysql.svg"}
                                    name={'mysql'}
                                    color="bg-cyan-400"
                                    percent={"90%"}
                                    handleShowSkillDetails={handleShowSkillDetails}
                                    dataSelected={dataSelected}
                                />
                                <Skill
                                    icon={"/icons/postgresql.svg"}
                                    name={'postgresql'}
                                    color="bg-cyan-600"
                                    percent={"70%"}
                                    handleShowSkillDetails={handleShowSkillDetails}
                                    dataSelected={dataSelected}
                                />
                                <Skill
                                    icon={"/icons/mongodb.svg"}
                                    name={'mongodb'}
                                    color="bg-teal-400"
                                    percent={"60%"}
                                    handleShowSkillDetails={handleShowSkillDetails}
                                    dataSelected={dataSelected}
                                />
                                <Skill
                                    icon={"/icons/html5.svg"}
                                    name={'html5'}
                                    color="bg-orange-500"
                                    percent={"98%"}
                                    handleShowSkillDetails={handleShowSkillDetails}
                                    dataSelected={dataSelected}
                                />
                                <Skill
                                    icon={"/icons/css3.svg"}
                                    name={'css3'}
                                    color="bg-cyan-600"
                                    percent={"98%"}
                                    handleShowSkillDetails={handleShowSkillDetails}
                                    dataSelected={dataSelected}
                                />
                                <Skill
                                    icon={"/icons/sass.svg"}
                                    name={'sass'}
                                    color="bg-rose-500"
                                    percent={"65%"}
                                    handleShowSkillDetails={handleShowSkillDetails}
                                    dataSelected={dataSelected}
                                />

                                <Skill
                                    icon={"/icons/bootstrap.svg"}
                                    name={'bootsrap'}
                                    color="bg-purple-500"
                                    percent={"90%"}
                                    handleShowSkillDetails={handleShowSkillDetails}
                                    dataSelected={dataSelected}
                                />
                                <Skill
                                    icon={"/icons/tailwindcss.svg"}
                                    name={'tailwind'}
                                    color="bg-cyan-500"
                                    percent={"90%"}
                                    handleShowSkillDetails={handleShowSkillDetails}
                                    dataSelected={dataSelected}
                                />
                                <Skill
                                    icon={"/icons/git.svg"}
                                    name={'git'}
                                    color="bg-orange-500"
                                    percent={"60%"}
                                    handleShowSkillDetails={handleShowSkillDetails}
                                    dataSelected={dataSelected}
                                />
                                <Skill
                                    icon={"/icons/git.svg"}
                                    name={'github'}
                                    color="bg-black"
                                    percent={"60%"}
                                    handleShowSkillDetails={handleShowSkillDetails}
                                    dataSelected={dataSelected}
                                />

                            </ul>
                        </div>


                    </div>
                    {/* Sección de Descripción */}
                    <div className="w-full md:w-1/2">
                        <div className=" text-white bg-slate-800 rounded-lg p-6 shadow-md">
                            {/* Descripción de habilidades */}


                            <SkillDetail dataSelected={dataSelected} />
                        </div>
                    </div>




                    {/* Sección de Tecnologías */}

                </div>



            </div>
        </section >

    )
}
