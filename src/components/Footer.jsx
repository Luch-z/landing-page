function Footer() {
    return (
        <div className="text-white bg-secondary flex flex-col gap-5 md:flex-row py-12 px-3 justify-around">
            <div className="flex flex-col gap-8">
                <img className="w-2/4 md:w-full" src="Logo-white.svg" alt="" />
                <div>
                    <p>Copyright © 2020 Nexcent ltd.</p>
                    <p>All rights reserved</p>
                </div>
                <div className="flex gap-3">
                    <a href="">
                        <img src="social/social (1).svg" alt="" />
                    </a>
                    <a href="">
                        <img src="social/social (2).svg" alt="" />
                    </a>
                    <a href="">
                        <img src="social/social (3).svg" alt="" />
                    </a>
                    <a href="">
                        <img src="social/social (4).svg" alt="" />
                    </a>
                </div>
            </div>
            <div className="flex flex-row md:gap-52 gap-16">
                <div className="flex flex-col gap-1">
                    <h2 className="mb-3">Company</h2>
                    <a className="font-normal" href="">
                        About us
                    </a>
                    <a className="font-normal" href="">
                        Blog
                    </a>
                    <a className="font-normal" href="">
                        Contact us
                    </a>
                    <a className="font-normal" href="">
                        Pricing
                    </a>
                    <a className="font-normal" href="">
                        Testimonials
                    </a>
                </div>
                <div className="flex flex-col gap-1">
                    <h2 className="mb-3">Support</h2>
                    <a className="font-normal" href="">
                        Help center
                    </a>
                    <a className="font-normal" href="">
                        Terms of service
                    </a>
                    <a className="font-normal" href="">
                        Legal
                    </a>
                    <a className="font-normal" href="">
                        Privacy policy
                    </a>
                    <a className="font-normal" href="">
                        Status
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <h2>Stay up to date</h2>
                <div className="flex bg-[#FFFFFF] bg-opacity-20 rounded-md w-4/6 md:w-full justify-between">
                    <input
                        className="bg-[#FFFFFF] bg-opacity-0 placeholder-gray-300 ml-3 border-none focus:outline-none"
                        placeholder="Your email address"
                        type="text"
                    />
                    <button
                        className="w-10 h-10 flex justify-center items-center border-none focus:outline-none"
                        type="submit"
                    >
                        <img src="send.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
