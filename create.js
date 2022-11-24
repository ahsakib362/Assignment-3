const {client} = require("./index.js");

async function insertData(){
    try {
        const database = client.db("EmployeeInformation");
        const collection = database.collection("Employees");

        const data = [
            {
                Name:"Abullah Hamid Sakib",
                Email:"abdullahhamid362@gmail.com",
                Job_Title:"Software Engineer",
                Salary:"30000",
                Address:"Chittagong"
            },
            {
                Name:"Mr X",
                Email:"mrx123@gmail.com",
                Job_Title:"Senior Software Engineer",
                Salary:"80000",
                Address:"Chittagong"
            },
            {
                Name:"Mr Y",
                Email:"mry123@gmail.com",
                Job_Title:"Graphics Designer",
                Salary:"25000",
                Address:"Dhaka"
            },
            {
                Name:"Mr Z",
                Email:"mrz123@gmail.com",
                Job_Title:"Content Writer",
                Salary:"35000",
                Address:"Rajshahi"
            },
            {
                Name:"Mr A",
                Email:"mra123@gmail.com",
                Job_Title:"Digital Marketing Expert",
                Salary:"45000",
                Address:"Chittagong"
            },
            {
                Name:"Mr B",
                Email:"mrb123@gmail.com",
                Job_Title:"Management Officer",
                Salary:"25000",
                Address:"Dhaka"
            },

        ]

        const result = await collection.insertMany(data);
        console.log(`${result.insertedCount} data created successfully`);

    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}

insertData();