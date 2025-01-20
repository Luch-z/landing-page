import Button from "./Button";

function Home() {
    return (
        <div className="flex flex-col gap-7 pb-10">
            <div>
                <div className="flex bg-[#F5F7FA] p-14">
                    <div className="flex flex-col m-auto gap-5">
                        <div>
                            <h1 className="text-5xl text-gray-950">
                                Lessons and insights
                            </h1>
                            <h1 className="text-5xl text-[#4CAF4F]">
                                from 8 years
                            </h1>
                        </div>

                        <p>
                            Where to grow your business as a photographer: site
                            or social media?
                        </p>
                        <div>
                            <Button>Register</Button>
                        </div>
                    </div>
                    <div className="m-auto">
                        <img src="public/Illustration.png" alt="" />
                    </div>
                </div>
                <div className="bg-[#F5F7FA] pb-3">
                    <img className="m-auto " src="public/Dot.png" alt="" />
                </div>
            </div>

            <div className="text-center gap-3 flex flex-col">
                <h1 className="text-4xl text-bold">Our Clients</h1>
                <p className="text-1xl">
                    We have been working with some Fortune 500+ clients
                </p>
                <div className="flex justify-between px-24">
                    <img src="public/clients/client (1).svg" alt="" />
                    <img src="public/clients/client (2).svg" alt="" />
                    <img src="public/clients/client (3).svg" alt="" />
                    <img src="public/clients/client (4).svg" alt="" />
                    <img src="public/clients/client (5).svg" alt="" />
                    <img src="public/clients/client (6).svg" alt="" />
                    <img src="public/clients/client (7).svg" alt="" />
                </div>
            </div>

            <div className="text-center gap-10 flex flex-col">
                <div>
                    <h1 className="text-4xl text-bold">
                        Manage your entire community
                    </h1>
                    <h1 className="text-4xl text-bold">in a single system</h1>
                    <p className="text-1xl">Who is Nextcent suitable for?</p>
                </div>
                <div className="flex justify-around">
                    <div className="w-1/4 shadow-md rounded-md p-3">
                        <img
                            className="m-auto"
                            src="public/manage (1).svg"
                            alt=""
                        />
                        <h1 className="text-3xl whitespace-normal">
                            Membership Organisations
                        </h1>
                        <p>
                            Our membership management software provides full
                            automation of membership renewals and payments
                        </p>
                    </div>
                    <div className="w-1/4 shadow-md rounded-md p-3">
                        <img
                            className="m-auto"
                            src="public/manage (2).svg"
                            alt=""
                        />
                        <h1 className="text-3xl whitespace-normal">
                            National Associations
                        </h1>
                        <p>
                            Our membership management software provides full
                            automation of membership renewals and payments
                        </p>
                    </div>
                    <div className="w-1/4 shadow-md rounded-md p-3">
                        <img
                            className="m-auto"
                            src="public/manage (3).svg"
                            alt=""
                        />
                        <h1 className="text-3xl">Clubs And Groups</h1>
                        <p>
                            Our membership management software provides full
                            automation of membership renewals and payments
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
