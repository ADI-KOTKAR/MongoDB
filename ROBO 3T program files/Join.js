db.sales.aggregate([
    {$lookup:
        {
                from:"products",
                localField:"item",
                foreignField:"name",
                as:"matchname"
        }
    }
])