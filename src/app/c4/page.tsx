export default function ChapterFour() {
    return (
        <div className="max-w-[794px] min-h-[1123px] w-full h-full mx-auto bg-white flex flex-col justify-center  items-center gap-1 shadow">
            <div className="flex flex-col px-20 gap-20">
                <h1 className="text-center text-[22px] font-bold">Chapter 4: Methodology</h1>
                <div className="flex flex-col gap-10">

                    <p>The methodology adopted for this project follows a systematic approach to ensure the POS
                        system is developed based on real-world requirements, is technically feasible, and aligns with
                        operational and economic considerations.</p>
                    <div className="flex flex-col gap-3">
                        <p className="font-bold text-lg">1. Requirement Identification</p>
                        <ul className="pl-[28.5px] flex flex-col gap-4 text-justify">
                            <li className="relative before:absolute before:w-[5px] before:h-[6px] before:bg-black before:rounded-full before:-left-[8px] before:top-[8.5px]">
                                <p className="font-semibold pl-3">

                                    Study of Existing Systems:
                                </p>
                                <p className="pl-3">A comprehensive analysis of current POS systems was conducted to identify commonly
                                    used features such as  sales tracking, inventory monitoring. This also helped highlight existing limitations, such as lack of
                                    customization, poor integration, and unfriendly user interfaces.</p>
                            </li>
                            <li className="relative before:absolute before:w-[5px] before:h-[6px] before:bg-black before:rounded-full before:-left-[8px] before:top-[8.5px]">
                                <p className="font-semibold pl-3">

                                    Requirement Collection from Potential Users:
                                </p>
                                <p className="pl-3">Interviews and surveys were conducted with potential end-users, including retail staff and
                                    business owners, to gather insights into their expectations and pain points. Key functional
                                    requirements such as fast transaction processing, real-time inventory updates were prioritized.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="font-bold mt-15">4</p>
        </div>
    )
}