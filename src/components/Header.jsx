import { Button } from "./UIElements";

function Header() {
    return (
        <div className="flex justify-between px-10 py-5 bg-[#F5F7FA]">
            <div className="flex">
                <img src="/public/Logo.svg" alt="" />
            </div>
            <div className="m-auto">
                <ul className="flex gap-10">
                    <li>Home</li>
                    <li>Service</li>
                    <li>Feature</li>
                    <li>Product</li>
                    <li>Testimonial</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="flex gap-5">
                <p className="text-[#4CAF4F] m-auto">Login</p>
                <Button>Sign up</Button>
            </div>
        </div>
    );
}

export default Header;
