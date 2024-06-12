function Footer() {
    return(
        <>
            <section className="text-center py-6 dark:bg-slate-950 dark:text-white">
                <p className="container">
                    Copyright &copy; { new Date().getFullYear() }. All rights reserved.
                </p>
            </section>
        </>
    )
}

export { Footer }