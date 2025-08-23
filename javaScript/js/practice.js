const Person = [
    {
        id: 1,
        name: "arbin",
        address: "kirtipur",
        college: "s.s college"
    },
    {
        id: 2,
        name: "bibash",
        address: "Panga",
        college: "Patan Mulitple Campus",
    },
    {
        id: 3,
        name: "nikesh",
        address: "Dhalpa",
        college: "S.S College"
    },
    {
        id: 4,
        name: "Bikalpa",
        address: "Bhakpati",
        college: "Jana Bhabana College"
    }
]

function Persons() {
    Person.map((item) => {
        console.log(item.name);
    })
}
Persons();