import { SkillsLevel  } from "."

const skillSet = [
    { skill: "HTML, CSS", percentage: "90%" },
    { skill: "PHP", percentage: "80%" },
    { skill: "React", percentage: "70%" },
    { skill: "Tailwind", percentage: "60%" },
]

function Skills() {
    return(
        <>
            <section
                id="about"
                className="bg-white dark:bg-slate-800 dark:text-white"
            >
                <div className="container md:w-[70%] sm:py-16 py-10">
                    <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
                        <div className="sm:order-2 relative font-bold">
                            <div className="text-center text-6xl text-black/5 xl:text-8xl dark:text-white/5">Skills</div>

                            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-4xl">Skill</h1>
                        </div>

                        <div className="sm:order-1 text-slate-500">
                            {/* <SkillsLevel skillName="HTML" percentage="50%" /> */}

                            {
                                skillSet.map( ( { skill, percentage }, i ) => (
                                    <SkillsLevel key={ i } skillName={ skill } percentage={ percentage }/>
                                ) )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export { Skills }