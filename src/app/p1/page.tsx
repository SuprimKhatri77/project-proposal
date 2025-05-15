export default function TableOfContent() {
    return (
        <div className="max-w-[794px] min-h-[1123px] w-full h-full  bg-white flex flex-col gap-10 shadow mx-auto  py-10 justify-center items-center">
            <h1 className="font-bold self-start pl-[163px] text-[22px] !text-left">Table of Contents</h1>
            <div className="text-justify flex flex-col">
                <p className="text-[18px] text-justify">List of Figures............................................................................i</p>
                <p className="text-[18px]">1.Introduction: ..........................................................................1</p>
                <p className="text-[18px]">2.Problem Statement: ...............................................................2</p>
                <p className="text-[18px]">3. Objective:..............................................................................3</p>

                <div>
                    <p className="text-[18px]">4. Methodology:........................................................................4</p>
                    <div className="pl-4">
                        <p className="text-[18px]">4.1 Requirement Identification:.............................................4</p>
                        <p className="text-[18px]">4.2 Feasibility Study:.............................................................5</p>
                        <p className="text-[18px]">4.3 High Level Design of System:.........................................6</p>

                    </div>
                    <p className="text-[18px]">5. Expected Outcome:................................................................7</p>
                    <p className="text-[18px]">6. References:.............................................................................8</p>
                </div>
            </div>
            <p className="font-bold !mt-10">i</p>
        </div>
    )
}