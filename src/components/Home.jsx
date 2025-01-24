import { Button, ClientLogo, FeatureCard } from "./UIElements";

function Home() {
    return (
        <div className="flex flex-col gap-7 pb-10">
            <div>
                <div className="flex bg-primary p-3 md:p-14">
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
                            <a href="">
                                <Button>Register</Button>
                            </a>
                        </div>
                    </div>
                    <div className="m-auto">
                        <img src="public/Illustration.png" alt="" />
                    </div>
                </div>
                <div className="bg-primary pb-3">
                    <img className="m-auto " src="public/Dot.png" alt="" />
                </div>
            </div>

            <div className="text-center gap-3 flex flex-col">
                <h1>Our Clients</h1>
                <p className="text-1xl">
                    We have been working with some Fortune 500+ clients
                </p>
                <div className="flex justify-between px-2 md:px-24">
                    {Array.from({ length: 7}, (_, i) => (
                        <ClientLogo
                            key={i}
                            src={`public/clients/client (${i + 1}).svg`}
                            alt={`Client ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            <div className="text-center gap-10 flex flex-col">
                <div>
                    <h1>Manage your entire community</h1>
                    <h1>in a single system</h1>
                    <p className="text-1xl">Who is Nextcent suitable for?</p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-around mx-7 md:mx-0 gap-5 md:gap-0">
                    <FeatureCard
                        imgSrc="public/manage (1).svg"
                        title="Membership Organisations"
                        description="Our membership management software provides full
                         automation of membership renewals and payments"
                    />
                    <FeatureCard
                        imgSrc="public/manage (2).svg"
                        title="National Associations"
                        description="Our membership management software provides full
                         automation of membership renewals and payments"
                    />
                    <FeatureCard
                        imgSrc="public/manage (3).svg"
                        title="Clubs And Groups"
                        description="Our membership management software provides full
                            automation of membership renewals and payments"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
