let bank = [
    {
        name: "uztelecom",
        budget: 200000,
        expensesPerYear: [
            {
                title: "rent",
                total: 1300,
            },
            {
                title: "salaries",
                total: 8500,
            },
            {
                title: "furniture",
                total: 100,
            },
        ],
    },
    {
        name: "artel",
        budget: 500000,
        expensesPerYear: [{
            title: "rent",
            total: 1000,
        },
        {
            title: "salaries",
            total: 1500,
        },
        {
            title: "furniture",
            total: 250,
        },
        ],
    },
    {
        name: "gm",
        budget: 1000000,
        expensesPerYear: [{
            title: "rent",
            total: 3000,
        },
        {
            title: "salaries",
            total: 35000,
        },
        {
            title: "furniture",
            total: 900,
        }
        ]
    }
]

for (let  item of bank) {
    for (const item_tw of item.expensesPerYear) {
       
        item.manth_bg =  item.budget  -= (item_tw.total += item_tw.total += item_tw.total)
       item.manth_bg = Math.floor(item.manth_bg / 12 )           
    }
}
console.log(bank);