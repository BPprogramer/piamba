

type SkillProps = {
    icon: string
    name: string,
    color: string,
    percent: string, 
    handleShowSkillDetails:(data: string) => void,
    dataSelected:string
    
}

export default function Skill({ name, color, percent, icon,handleShowSkillDetails,dataSelected }: SkillProps) {
  
    if(dataSelected==name){
        console.log('son iguales')
    }
    
    return (
        <li 
            className={`flex flex-col gap-2 bg-slate-700 p-3 rounded-md hover:bg-slate-500 transition cursor-pointer ${dataSelected==name?'bg-slate-400':''}`}
            onClick={()=>(handleShowSkillDetails(name))}
        >
            <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                    <img
                        src={icon}
                        alt={'php'}
                        className="w-6 h-6"
                    />
                </div>
               

                {
                    ['REACT + TYPESCRIPT', 'EXPRESS + TYPESCRIPT'].includes(name) && (
                        <>
                            <span className="text-white uppercase font-bold">+</span>
                             <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                            <img
                                src='/icons/ts.svg'
                                alt={'ts'}
                                className="w-6 h-6"
                            />
                        </div>
                        </>
                       
                    )
                }
                <span className="text-white font-medium uppercase">{name}</span>
            </div>
            {/* Barra de progreso */}
            <div className="w-full bg-slate-800 rounded-full h-1">
                
                <div
                    className={`${color} h-1 rounded-full`}
                    style={{ width: percent }} // Cambia el porcentaje aquí
                ></div>
            </div>
        </li>
    )
}
