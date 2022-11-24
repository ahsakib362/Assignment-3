const {client} = require("./index.js");

async function readData(){
    try {
        const database = client.db("EmployeeInformation");
        const collection = database.collection("Employees");

        const query = {Address:"Chittagong"};

        const result = await collection.find(query);

        if ((await result.EstimatedDocumentCount)=== 0) {
            console.log("No data found");
        } else {
            const insertedData = await result.toArray();
            await insertedData.forEach(collection=>console.log(collection));
            //console.log(result);
        }

    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}

readData();