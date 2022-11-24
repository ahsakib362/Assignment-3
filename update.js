const {client} = require("./index.js");

async function updateData(){
    try {
        const database = client.db("EmployeeInformation");
        const collection = database.collection("Employees");

        const target = {Salary:"25000"};

        const updateData = {
            $set:{
                Salary:"28000"
            },
        };

        const result = await collection.updateMany(target,updateData);
        console.log(`Updated ${result.modifiedCount} data`);

    
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}

updateData();