import { Button } from "./UIElements";

function Header() {
    return (
        <div className="flex justify-between px-10 py-5 bg-primary">
            <div className="flex">
                <a href=""><img src="/public/Logo.svg" alt="" /></a>
            </div>
            <div className="m-auto">
                <ul className="flex gap-10">
                    <a href=""><li>Home</li></a>
                    <a href=""><li>Service</li></a>
                    <a href=""><li>Feature</li></a>
                    <a href=""><li>Product</li></a>
                    <a href=""><li>Testimonial</li></a>
                    <a href=""><li>FAQ</li></a>
                </ul>
            </div>
            <div className="flex gap-5">
                <a href="/"><p className="text-[#4CAF4F] m-auto">Login</p></a>
                <a href=""><Button>Sign up</Button></a>
            </div>
        </div>
    );
}

export default Header;
