import { Project } from "../../types"
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

type ModalProjectDetailsProps = {
    projectDetails: Project,
    modalProjectDetails: boolean,
    setModalProjectDetails: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ModalProjectDetails({ projectDetails, modalProjectDetails, setModalProjectDetails }: ModalProjectDetailsProps) {





    return (
        <>


            <Dialog
                open={modalProjectDetails}
                as="div"
                className="relative z-50 focus:outline-none"
                onClose={() => setModalProjectDetails(!modalProjectDetails)}
            >
                <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-screen-md mx-4 sm:mx-52 rounded-xl bg-white/75 p-6 backdrop-blur-xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle
                                as="h3"
                                className="text-xl text-black text-center uppercase font-bold"
                            >
                                {projectDetails.name}
                            </DialogTitle>

                            <div className="mt-4">
                                <img
                                    src="/project_2/3.jpeg"
                                    alt=""
                                    className="w-full max-h-[70vh] object-contain"
                                />
                                <p className="mt-4 text-center text-gray-700">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Consectetur eum laudantium, at consequuntur placeat voluptate,
                                    fugit dignissimos minus culpa quis ex officia quae, doloribus
                                    doloremque veritatis est inventore tenetur rerum.
                                </p>
                            </div>

                            <div className="mt-4">
                                <Button
                                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600 focus:outline-white"
                                    onClick={() => setModalProjectDetails(false)}
                                >
                                    Got it, thanks!
                                </Button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>


        </>
    )
}
