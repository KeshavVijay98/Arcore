import { Link } from "react-router-dom";

function Welcome() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-(--background) px-4 py-8 text-(--foreground) sm:px-6 lg:px-8">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-24 -top-32 h-96 w-96 rounded-full bg-(--surface-muted) opacity-70 blur-3xl"></div>
                <div className="absolute -bottom-48 -right-32 h-128 w-lg rounded-full bg-(--surface-muted) opacity-60 blur-3xl"></div>
            </div>

            <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center">
                <div className="w-full max-w-3xl border border-(--border) bg-(--surface) px-6 py-8 shadow-[0_24px_80px_rgb(17_17_17/10%)] sm:px-10 sm:py-10 lg:px-14 lg:py-12">
                    <div className="mb-10">
                        <span className="font-serif text-lg tracking-[-0.02rem] text-(--foreground)">Arcore</span>
                    </div>

                    <header className="max-w-2xl">
                        <h1 className="font-serif text-4xl font-normal leading-[1.05] tracking-[-0.035em] text-(--foreground) sm:text-5xl
                        lg:text-6xl">Welcome to Arcore</h1>
                        <p className="mt-6 max-w-xl font-sans text-base leading-7 text-(--foreground-secondary) sm:text-lg sm:leading-8">
                            Arcore is a platform in which you see your current present and it's situation, the future you want to be have, goals you wanted to achieve, time period of your trajectory.
                        </p>
                    </header>

                    <section className="mt-12 border-y border-(--border-subtle)">
                        <article className="grid gap-2 border-b border-(--border-subtle) py-6 last:border-b-0 sm:grid-cols-[8rem_1fr] sm:gap-8">
                            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-(--foreground)">Your Life</h2>
                            <p className="max-w-xl font-sans text-sm leading-6 text-(--foreground-secondary)">See your current situation and what matter in your life</p>
                        </article>

                        <article className="grid gap-2 border-b border-(--border-subtle) py-6 last:border-b-0 sm:grid-cols-[8rem_1fr] sm:gap-8">
                            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-(--foreground)">Your Goals</h2>
                            <p className="max-w-xl font-sans text-sm leading-6 text-(--foreground-secondary)">Define the life you want and the goals that move you toward it</p>
                        </article>

                        <article className="grid gap-2 border-b border-(--border-subtle) py-6 last:border-b-0 sm:grid-cols-[8rem_1fr] sm:gap-8">
                            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-(--foreground)">Your Trajectory</h2>
                            <p className="max-w-xl font-sans text-sm leading-6 text-(--foreground-secondary)">Understand how your life changes over time, including meaningful events, milestones and changes</p>
                        </article>
                    </section>

                    <section className="mt-10 flex flex-col gap-6 justify-center sm:flex-row sm:items-center">
                        <Link to="/signup" className="inline-flex min-h-12 items-center justify-center bg-(--primary) px-7 font-sans text-sm font-medium text-(--primary-foreground) transition-colors 
                        duration-(--duration-normal) ease-(--ease-standard) hover:bg-(--foreground-secondary) focus-visible:outline-2 focus-visible:outline-(--foreground) focus-visible:outline-offset-2">Sign Up</Link>

                        <Link to="/login" className="inline-flex min-h-12 items-center justify-center border border-(--border) bg-transparent px-7 font-sans text-sm font-medium
                        text-(--foreground) transition-colors duration-(--duration-normal) ease-(--ease-standard) hover:bg-(--surface-muted) hover:border-(--foreground-muted) focus-visible:outline-2 focus-visible:outline-(--foreground)
                        focus-visible:outline-offset-2">Log In</Link>
                    </section>
                </div>
            </div>
        </main>
    )
};

export default Welcome;