const {client} = require("./index.js");

async function deleteData(){
    try {
        const database = client.db("EmployeeInformation");
        const collection = database.collection("Employees");

        const query = {Name:"Mr Y"};

        const result = await collection.deleteOne(query);

        if ((result.deletedCount)=== 1) {
            console.log(`Successfully one data deleted`);
        } else {
           console.log("No data deleted");
        }

    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}

deleteData();