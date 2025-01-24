import { Button } from "./UIElements";

function Header() {
    return (
        <div className="flex justify-between px-5 py-5 bg-primary gap-5">
            <div className="flex items-center">
                <a href="">
                    <img src="Logo.svg" alt="" />
                </a>
            </div>
            <div className="m-auto">
                <ul className="flex gap-10 invisible md:visible md:gap-5 size-0 md:size-auto">
                    <a href="">
                        <li className="">Home</li>
                    </a>
                    <a href="">
                        <li>Service</li>
                    </a>
                    <a href="">
                        <li>Feature</li>
                    </a>
                    <a href="">
                        <li>Product</li>
                    </a>
                    <a href="">
                        <li>Testimonial</li>
                    </a>
                    <a href="">
                        <li>FAQ</li>
                    </a>
                </ul>
            </div>
            <div className="flex gap-5 items-center">
                <a href="/">
                    <p className="text-[#4CAF4F] m-auto">Login</p>
                </a>
                <a href="">
                    <Button>Sign up</Button>
                </a>
            </div>
        </div>
    );
}

export default Header;
