
import { useMemo } from "react"
import { skillDB } from "../../data/skillDB"

type SkillDetailProps = {
    dataSelected:string
}

export default function SkillDetail({dataSelected}:SkillDetailProps) {



    const skillSelectedFilter = useMemo(()=> skillDB.filter(skillSelected =>skillSelected.name == dataSelected) , [dataSelected])
    const currentDate = new Date().getFullYear()


    return (

        <div className="bg-slate-700 rounded-lg p-6 shadow-md">
            <div>
                <h3 className="text-2xl font-semibold text-blue-400 mb-4 uppercase">{skillSelectedFilter[0].name}</h3>
                <span className="text-sm text-yellow-500 font-bold">Experiencia: mas de {currentDate-skillSelectedFilter[0].startYear} años</span> {/* Esta es la etiqueta pequeña */}
            </div>

            <p className="text-gray-300 text-base mt-5">
               {skillSelectedFilter[0].description}
            </p>
        </div>
    )
}
