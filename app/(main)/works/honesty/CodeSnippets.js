const codeSnippets = {
    titleCard: {
        filename: "app.js",
        language: "jsx",
        code: `<TitleCard
    make={"Mini"}
    model={"Cooper S"}
    year={2011}
    mileage={113000}
    motor={"N18 1.6T"}
    transmission={"6MT"}
    LCI={true}
    color={"Pepper White"}
/>`
    },
    serviceEntry: {
        filename: "ServiceHistory.js",
        language: "jsx",
        code: `<ServiceEntry
    title="Replaced timing chain, exhaust VANOS sprocket"
    description="Replaced timing chain assembly along with the gear, new chain, guides, torque to yield fasteners, rear main seal."
    timestamp={parse("03.13.2025", "MM.dd.yyyy", new Date())}
    urgency="essential"
    pricing={[
        {
            price: 178.99,
            name: 'Mini Exhaust VANOS Camshaft Sprocket',
            source: 'FCP Euro & Febi Bilstein',
            URL: 'https://www.fcpeuro.com/products/mini-timing-chain-sprocket-febi-bilstein-11367536085?gQT=2'
        },
    ]}
    images={[
        "images/services/03.13.2025/head.jpeg",
        "images/services/03.13.2025/timing_chain.jpeg",
        "images/services/03.13.2025/vanos_gear.jpeg",
    ]}
    hours={24*3}
    info="The N18 engine has a system called VANOS on both the intake and exhaust side..."
    link="https://bimmers.com/blog/bmw-vanos-explained-what-it-does-why-it-fails-and-how-to-fix-it/"
/>`
    },
    modificationEntry: {
        filename: "ModificationHistory.js",
        language: "jsx",
        code: `<ModificationEntry
    title="H&R Pro Street Coilovers"
    description="Smooth ride on the street with no creaks, and is nice and firm on the track."
    images={[
        "images/modifications/coilovers/0.jpg",
        "images/modifications/coilovers/1.jpg",
        "images/modifications/coilovers/2.jpg",
    ]}
    category="suspension"
/>`
    },
    photoCarousel: {
        filename: "app.js",
        language: "jsx",
        code: `<PhotoCarousel images={[
    "images/mini/front.jpg",
    "images/mini/front_quarter_right.jpg",
    "images/mini/front_quarter_left.jpg",
    "images/mini/engine_bay.jpg",
    "images/mini/driver_seat.jpg",
    "images/mini/tachometer.jpg",
    "images/mini/passenger_seat.jpg",
]} />`
    }
};

export default codeSnippets;
