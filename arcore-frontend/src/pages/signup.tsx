import { FaUser, FaLock, FaEye, FaEyeSlash} from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState, type SubmitEventHandler } from "react";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [termsPrivacy, setTermsPrivacy] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        termsPrivacy:""
    })
    const submitHandler: SubmitEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if(!validateForm()) {
            return;
        }
        setLoading(true);

        // later API come here, this is for temporary completion.
        console.log({
            name,
            email,
            password,
            confirmPassword,
            termsPrivacy
        })
    }
    function validateForm() {
        const newErrors = ({
            name:"",
            email:"",
            password:"",
            confirmPassword:"",
            termsPrivacy:""
        })
        if(!name.trim()) {
            newErrors.name = "Name is required"
        } else if(name.trim().length < 2 || name.trim().length > 50) {
            newErrors.name = "Enter name within 2 and 50"
        } else if(!/^[\p{L}]+(?:[ '\u2019-][\p{L}]+)*$/u.test(name.trim())) {
            newErrors.name = "Enter a valid name"
        }

        if(!email.trim()) {
            newErrors.email = "Email is required"
        } else if(email.trim().length < 8 || email.trim().length > 120) {
            newErrors.email = "Enter email within 8 and 120"
        } else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email.trim())) {
            newErrors.email = "Enter a valid email"
        }

        if(!password) {
            newErrors.password = "Password is required"
        } else if(!/^(?=.*[A-Za-z])(?=.*\d).{10,}$/.test(password)) {
            newErrors.password = "Password must include at least one letter, one number and 10 characters"
        }

        if(!confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password"
        } else if(confirmPassword !== password) {
            newErrors.confirmPassword = "password do not match"
        }

        if(!termsPrivacy) {
            newErrors.termsPrivacy = "Please agree to the Terms of Service and privacy policy"
        }
        setErrors(newErrors);
        return !(
            newErrors.name || newErrors.email || newErrors.password
            || newErrors.confirmPassword || newErrors.termsPrivacy
        )
    }
    return (
        // root box
        <div className="min-h-screen bg-(--background) px-4 py-4 text-(--foreground) sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <div className="mx-auto w-full max-w-xl border border-(--border) bg-(--surface) px-6 py-3 shadow-[0_12px_40px_rgb(17_17_17/6%)] sm:px-8 sm:py-4 lg:px-10 lg:py-5">
                {/* description part */}
                <div className="space-y-1">
                    <h1 className="font-serif text-4xl font-normal tracking-tight leading-[1.05] sm:text-5xl">Create Your First Account</h1>
                    <p className="max-w-md font-sans text-base leading-7 text-(--foreground-secondary)">Observe your life with a clear, accurate view</p>
                </div>

                <form noValidate onSubmit={submitHandler} className="mt-6 space-y-3">
                    {/* name */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="block font-sans text-sm font-medium text-(--foreground)">Full Name</label>
                        <div className="relative">
                            <FaUser aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--foreground-muted)"/>
                            <input type="text" id="name" name="name" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)}
                            className="min-h-12 w-full border border-(--border) bg-(--surface) pl-10 pr-3 font-sans text-base text-(--foreground) outline-none transition-[border-color,box-shadow] 
                            duration-(--duration-normal) ease-(--ease-standard) hover:border-(--foreground-muted) focus:border-(--foreground) focus:ring-2 
                            focus:ring-(--foreground)/8"/>
                        </div>
                        {errors.name && (
                            <p role="alert" className="text-sm leading-5 text-(--danger)">{errors.name}</p>
                        )}
                    </div>
                        

                    {/* email */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block font-sans text-sm font-medium text-(--foreground)">Email Address</label>
                        <div className="relative">
                            <MdEmail aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-(--foreground-muted)"/>
                            <input type="email" id="email" name="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                            className="min-h-12 w-full border border-(--border) bg-(--surface) pl-10 pr-3 font-sans text-base text-(--foreground) outline-none 
                            transition-[border-color,box-shadow] duration-(--duration-normal) ease-(--ease-standard) hover:border-(--foreground-muted) 
                            focus:border-(--foreground) focus:ring-2 focus:ring-(--foreground)/8"/>
                        </div>
                        {errors.email && (
                            <p role="alert" className="text-sm leading-5 text-(--danger)">{errors.email}</p>
                        )}
                    </div>
                    

                    {/* new password */}
                    <div className="space-y-2">
                        <label htmlFor="password" className="block font-sans text-sm font-medium text-(--foreground)">Password</label>
                        <div className="relative">
                            <MdLock aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-(--foreground-muted)"/>

                            <input type={showPassword ? "text" : "password"} id="password" name="password" autoComplete="new-password" required value={password} onChange={(e) => setPassword(e.target.value)}
                            className="min-h-12 w-full border border-(--border) bg-(--surface) pl-10 pr-3 font-sans text-base text-(--foreground) outline-none 
                            transition-[border-color,box-shadow] duration-(--duration-normal) ease-(--ease-standard) hover:border-(--foreground-muted) 
                            focus:border-(--foreground) focus:ring-2 focus:ring-(--foreground)/8"/>

                            {showPassword ? (
                                <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-(--foreground-muted) transition-colors hover:text-(--foreground)"/>
                            ) : (
                                <FaEye onClick={() => setShowPassword(!showPassword)} className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-(--foreground-muted) transition-colors hover:text-(--foreground)" />
                            )}
                        </div>
                        {errors.password && (
                            <p role="alert" className="text-sm leading-5 text-(--danger)">{errors.password}</p>
                        )}
                    </div>
                    

                    {/* confirm password */}
                    <div className="space-y-2">
                        <label htmlFor="confirm-password" className="block font-sans text-sm font-medium text-(--foreground)">Confirm Password</label>
                        <div className="relative">
                            <FaLock aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--foreground-muted)"/>
                            
                            <input type={showConfirmPassword ? "text" : "password"} id="confirm-password" name="confirm-password" autoComplete="new-password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                            className="min-h-12 w-full border border-(--border) bg-(--surface) pl-10 pr-3 font-sans text-base text-(--foreground) outline-none 
                            transition-[border-color,box-shadow] duration-(--duration-normal) ease-(--ease-standard) hover:border-(--foreground-muted) 
                            focus:border-(--foreground) focus:ring-2 focus:ring-(--foreground)/8"/>

                            {showConfirmPassword ? (
                                <FaEyeSlash onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-(--foreground-muted) transition-colors hover:text-(--foreground)"/>
                            ) : (
                                <FaEye onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-(--foreground-muted) transition-colors hover:text-(--foreground)" />
                            )}
                        </div>
                        {errors.confirmPassword && (
                            <p role="alert" className="text-sm leading-5 text-(--danger)">{errors.confirmPassword}</p>
                        )}
                    </div>

                    {/* terms and privacy policy */}
                    <div className="flex items-center gap-3 pt-1">
                        <input type="checkbox" id="terms-privacy" name="terms-privacy" value="accepted" required checked={termsPrivacy} onChange={(e) => setTermsPrivacy(e.target.checked)}
                        className="mt-1 h-4 w-4 shrink-0 accent-(--foreground)"/>
                        <label htmlFor="terms-privacy" className="text-sm leading-6 text-(--foreground-secondary)">
                            I agree to the {" "} <Link to="/terms" className="font-medium text-(--foreground) underline underline-offset-4 hover:text-(--foreground-secondary)">Terms of Service</Link>{" "}
                            and {" "} <Link to="/privacy" className="font-medium text-(--foreground) underline underline-offset-4 hover:text-(--foreground-secondary)">Privacy Policy</Link>
                        </label>
                    </div>
                    {errors.termsPrivacy && (
                        <p role="alert" className="text-sm leading-5 text-(--danger)">{errors.termsPrivacy}</p>
                    )}
                

                    {/* sign up button */}
                    <button type="submit" disabled={loading}
                    className="inline-flex min-h-12 w-full items-center justify-center bg-(--primary) px-6 font-sans text-sm font-medium text-(--primary-foreground) transition-colors duration-(--duration-normal) 
                    ease-(--ease-standard) hover:bg-(--foreground-secondary) focus-visible:outline-2 focus-visible:outline-(--foreground) focus-visible:outline-offset-2">Create Account</button>
                </form>

                {/* divider */}
                <div className="my-6 flex items-center gap-4">
                    <div className="h-px flex-1 bg-(--border-subtle)"></div>
                    <p className="shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-(--foreground-muted)">or continue with</p>
                    <div className="h-px flex-1 bg-(--border-subtle)"></div>
                </div>

                {/* OAuth */}
                <div className="grid gap-3 sm:grid-cols-2">
                    <button type="button" className="inline-flex min-h-12 w-full items-center justify-center gap-3 border border-(--border) bg-(--surface) px-4 font-sans text-sm font-medium text-(--foreground) 
                    transition-colors duration-(--duration-normal) ease-(--ease-standard) hover:bg-(--surface-muted) hover:border-(--foreground-muted) focus-visible:outline-2 focus-visible:outline-(--foreground) focus-visible:outline-offset-2">
                        <svg aria-hidden="true" className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>Continue with Google   
                    </button>

                    <button type="button" className="inline-flex min-h-12 w-full items-center justify-center gap-3 border border-(--border) bg-(--surface) px-4 font-sans text-sm font-medium text-(--foreground) 
                    transition-colors duration-(--duration-normal) ease-(--ease-standard) hover:bg-(--surface-muted) hover:border-(--foreground-muted) focus-visible:outline-2 focus-visible:outline-(--foreground) focus-visible:outline-offset-2">
                        <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-on-surface" fill="currentColor" viewBox="0 0 24 24">
                            <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 
                            0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 
                            1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 
                            2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 
                            3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" 
                            fillRule="evenodd" />
                        </svg>Continue with GitHub 
                    </button>
                </div>

                {/* login part */}
                <div className="mt-6 border-t border-(--border-subtle) pt-4 text-center">
                    <p className="text-sm text-(--foreground-secondary)">Already have an Account? {" "}</p>
                    <Link to="/login" className="font-medium text-(--foreground) underline underline-offset-4 hover:text-(--foreground-secondary)">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup;