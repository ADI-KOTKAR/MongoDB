db.person.aggregate([
    //{$match : {name:"aimee Zank"}},
    {$group: 
                {_id:{ name:"$name", scores:"$scores"}}
    },
    {$match:
                {"_id.name" : "aimee Zank"}
    }
])
    
db.person.find().pretty()
    

 








