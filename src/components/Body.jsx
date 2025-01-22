import { Button } from "./UIElements";

function Body() {
    return (
        <div className="flex flex-col gap-7">
            <div className="flex justify-center">
                <div>
                    <img src="public/frame 35.svg" alt="" />
                </div>
                <div className="w-2/5 my-auto gap-5 flex flex-col">
                    <h1>The unseen of spending three years at Pixelgrade</h1>
                    <p className="max-w-3xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sit amet justo ipsum. Sed accumsan quam vitae est
                        varius fringilla. Pellentesque placerat vestibulum lorem
                        sed porta. Nullam mattis tristique iaculis. Nullam
                        pulvinar sit amet risus pretium auctor. Etiam quis massa
                        pulvinar, aliquam quam vitae, tempus sem. Donec
                        elementum pulvinar odio.
                    </p>
                    <div>
                        <Button>Learn More</Button>
                    </div>
                </div>
            </div>

            <div className="bg-primary flex justify-center p-16">
                <div className="m-auto">
                    <h1>Helping a local</h1>
                    <h1 className="text-[#4CAF4F]">business reinvent itself</h1>
                    <p>We reached here with our hard work and dedication</p>
                </div>
                <div className="m-auto grid grid-cols-2 gap-5">
                    {[
                        {
                            img: "public/business (1).svg",
                            value: "2,245,341",
                            label: "Members",
                        },
                        {
                            img: "public/business (1).svg",
                            value: "46,328",
                            label: "Clubs",
                        },
                        {
                            img: "public/business (3).svg",
                            value: "828,867",
                            label: "Event Bookings",
                        },
                        {
                            img: "public/business (4).svg",
                            value: "1,926,436",
                            label: "Payments",
                        },
                    ].map((item, index) => (
                        <div key={index} className="flex gap-3">
                            <img src={item.img} alt="" className="w-16 h-16" />
                            <div>
                                <h1>{item.value}</h1>
                                <p>{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center ">
                <img className="m-auto" src="public/pana.svg" alt="" />
                <div className="flex flex-col m-auto gap-5 w-2/4">
                    <h1 className="w-2/3">
                        How to design your site footer like we did
                    </h1>
                    <p>
                        Donec a eros justo. Fusce egestas tristique ultrices.
                        Nam tempor, augue nec tincidunt molestie, massa nunc
                        varius arcu, at scelerisque elit erat a magna. Donec
                        quis erat at libero ultrices mollis. In hac habitasse
                        platea dictumst. Vivamus vehicula leo dui, at porta nisi
                        facilisis finibus. In euismod augue vitae nisi
                        ultricies, non aliquet urna tincidunt. Integer in nisi
                        eget nulla commodo faucibus efficitur quis massa.
                        Praesent felis est, finibus et nisi ac, hendrerit
                        venenatis libero. Donec consectetur faucibus ipsum id
                        gravida.
                    </p>
                    <div>
                        <Button>Learn More</Button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center bg-primary p-5">
                <div className="w-1/5"></div>
                <div className="flex flex-col w-4/6 gap-2 ml-6">
                    <p>
                        Maecenas dignissim justo eget nulla rutrum molestie.
                        Maecenas lobortis sem dui, vel rutrum risus tincidunt
                        ullamcorper. Proin eu enim metus. Vivamus sed libero
                        ornare, tristique quam in, gravida enim. Nullam ut
                        molestie arcu, at hendrerit elit. Morbi laoreet elit at
                        ligula molestie, nec molestie mi blandit. Suspendisse
                        cursus tellus sed augue ultrices, quis tristique nulla
                        sodales. Suspendisse eget lorem eu turpis vestibulum
                        pretium. Suspendisse potenti. Quisque malesuada enim
                        sapien, vitae placerat ante feugiat eget. Quisque
                        vulputate odio neque, eget efficitur libero condimentum
                        id. Curabitur id nibh id sem dignissim finibus ac sit
                        amet magna.
                    </p>
                    <h2 className="text-[#4CAF4F]">Tim Smith</h2>
                    <p className="text-[#89939E] mb-3">
                        British Dragon Boat Racing Association
                    </p>
                    <div className="flex gap-4">
                        {Array.from({ length: 6 }, (_, i) => (
                            <img
                                key={i}
                                src={`public/clients/client (${i + 1}).svg`}
                                alt={`Client ${i + 1}`}
                            />
                        ))}
                        <h2 className="text-[#4CAF4F] my-auto">
                            Meet all customers
                        </h2>
                        <img className="mt-1" src="public/arrow.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className="text-center flex flex-col gap-36 mb-16">
                <div className="">
                    <h1>Caring is the new marketing</h1>
                    <p className="w-3/6 m-auto">
                        The Nexcent blog is the best place to read about the
                        latest membership insights, trends and more. See whos
                        joining the community, read about how our community are
                        increasing their membership income and lots more.
                    </p>
                </div>
                <div className="flex justify-center gap-14 ">
                    <div className="w-1/4 bg-primary p-5 rounded-xl flex flex-col gap-5 shadow-md">
                        <h2 className="text-[#717171]">
                            Creating Streamlined Safeguarding Processes with
                            OneRen
                        </h2>
                        <div className="flex mx-auto">
                            <h2 className="text-[#4CAF4F]">Readmore</h2>
                            <img
                                className="mt-1"
                                src="public/arrow.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="w-1/4 bg-primary p-5 rounded-xl flex flex-col gap-5 shadow-md">
                        <h2 className="text-[#717171]">
                            What are your safeguarding responsibilities and how
                            can you manage them?
                        </h2>
                        <div className="flex mx-auto">
                            <h2 className="text-[#4CAF4F]">Readmore</h2>
                            <img
                                className="mt-1"
                                src="public/arrow.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="w-1/4 bg-primary p-5 rounded-xl flex flex-col gap-5 shadow-md">
                        <h2 className="text-[#717171]">
                            Revamping the Membership Model with Triathlon
                            Australia
                        </h2>
                        <div className="flex mx-auto">
                            <h2 className="text-[#4CAF4F]">Readmore</h2>
                            <img
                                className="mt-1"
                                src="public/arrow.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
