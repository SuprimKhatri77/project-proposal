export default function ChapterFive() {
    return (
        <div className="max-w-[794px] min-h-[1123px] w-full h-full mx-auto bg-white flex flex-col justify-center  items-center gap-1 shadow">
            <div className="flex flex-col px-20 gap-20">
                {/* <h1 className="text-center text-[22px] font-bold">Chapter 4: Methodology</h1> */}
                <div className="flex flex-col gap-10">

                    {/* <p>The methodology adopted for this project follows a systematic approach to ensure the POS
                        system is developed based on real-world requirements, is technically feasible, and aligns with
                        operational and economic considerations.</p> */}
                    <div className="flex flex-col gap-3">
                        <p className="font-bold text-lg">2. Feasibility Study</p>
                        <ul className="pl-[28.5px] flex flex-col gap-4 text-justify">
                            <li className="relative before:absolute before:w-[5px] before:h-[6px] before:bg-black before:rounded-full before:-left-[8px] before:top-[8.5px]">
                                <p className="font-semibold pl-3">

                                    Technical Feasibility:
                                </p>
                                <p className="pl-3">The required hardware and software resources for developing the POS system were
                                    assessed. This includes evaluating programming languages, database systems, and
                                    deployment platforms (e.g., local vs. cloud-based solutions). The development environment
                                    is confirmed to be within the team's technical capabilities.</p>
                            </li>
                            <li className="relative before:absolute before:w-[5px] before:h-[6px] before:bg-black before:rounded-full before:-left-[8px] before:top-[8.5px]">
                                <p className="font-semibold pl-3">

                                    Operational Feasibility:
                                </p>
                                <p className="pl-3">The proposed system was evaluated to ensure it fits seamlessly into typical retail workflows.
                                    This involves mapping the system’s features to daily business operations such as sales entry,
                                    stock monitoring, and receipt printing. Usability testing ensures minimal training is required
                                    for adoption.</p>
                            </li>
                            <li className="relative before:absolute before:w-[5px] before:h-[6px] before:bg-black before:rounded-full before:-left-[8px] before:top-[8.5px]">
                                <p className="font-semibold pl-3">

                                    Economic Feasibility:
                                </p>
                                <p className="pl-3">A cost-benefit analysis was performed to estimate development costs versus expected
                                    benefits such as improved efficiency, reduced errors, and better data insights. The results
                                    indicate that the system is economically viable for small to medium-sized businesses.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="font-bold mt-50">5</p>
        </div>
    )
}