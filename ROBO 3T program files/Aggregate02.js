db.sales.aggregate([
    //stage 1
    {$project: 
        { item:1, quantity:1, _id:0}
    },
    //stage 2
    {$match:
        {quantity:{$gt:2}}
    },
    //stage 3
    {$group:
        {_id:"$item", totalcount:{$sum:1}}
    },
    //stage 4
    {$skip:
        1
    },
    //stage 5
    {$limit:
        1
    }
    //stage 6
//     {$count:
//         "count"
//     }
])









