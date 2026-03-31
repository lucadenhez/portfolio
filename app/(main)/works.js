export const cars = [
    {
        make: "BMW",
        model: "135i",
        year: 2011,
        horsepower: 390,
        torque: 650,
        transmission: "6MT",
        paint_code: "Le Mans Blue",
        drivetrain: "rwd",
        forza_drivetrain: "rwd_front_engine",
        forza_class: "a_800",
        path: "/works/135i",
        image: "/works/135i/cover.jpeg"
    },
    {
        make: "Mini",
        model: "R56 JCW",
        year: 2011,
        horsepower: 250,
        torque: 360,
        transmission: "6MT",
        paint_code: "Pepper White",
        drivetrain: "fwd",
        forza_drivetrain: "fwd_front_engine",
        forza_class: "b_700",
        path: "/works/r56",
        image: "/works/r56/cover.jpeg"
    },
];

// Backward compatibility for legacy car article pages.
export const mechanicalWorks = cars;
