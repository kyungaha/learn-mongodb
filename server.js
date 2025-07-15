//require("express")
import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { ObjectId } from 'mongodb';

const app = express();

//.env 설정 가져오기
dotenv.config();

//JSON형태의 데이터를 객체로 변환.  backend 에서도 사용할수 있도록
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

// MONGODB 연결
// MONGODB 객체 생성 (MONGODB와의 연결을 관리, 상호작용)
const client = new MongoClient(MONGODB_URI);
const db = client.db(DB_NAME); // 데이터베이스 선택
const collection = db.collection("users"); // 컬렉션 선택

// 미션
app.get('/users/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const result = await collection.findOne({_id:new ObjectId(id)}, {projection: {name:1}});
        
        console.log("🚀 ~ app.get ~ result:", result);
      
        res.status(200).json({result});
    } catch (error) {
        console.log(`💥fetch error:${error}`);
        res.status(500).json({message : "💥Error fetching users", error: error.message});
    }
})

// 데이터 읽기
app.get('/users', async (req, res) => {
    try {
        // Cursor 객체 : 데이터를 한개씩 순차저긍로 가져와 document를 반환. 한번에 다 가져오지 않고 순차적으로 반환.
        const users = await collection.find().toArray();

        console.log("🚀 ~ app.get ~ users:", users.length);
        console.log("🚀 ~ app.get ~ users:", users);

        //응답
        res.status(200).json({users});

    } catch (error) {
        console.log(`💥fetch error:${error}`);

        res.status(500).json({message : "💥Error fetching users", error: error.message});
        
    }
      
})

// 데이터추가
app.post('/users', async (req, res) => {

    try {
    //구조분해할당
    const {name: userName, age, email} = req.body;

    const result = await collection.insertOne({...req.body, createdAt: new Date()});
    console.log("🚀 ~ app.post ~ userName:", userName);

    res.status(200).json({users});
    } catch (error) {
        console.log(`💢Error creating users: ${error}`);
        res.status(500).json({message: `💢Error creating users`, error: error.message});
    }
    // req.body: object 객체
    // const userName = req.body.name
    // const age = req.body.age
    // const email = req.body.email
    

})

// 데이터 수정
app.put('/users/:id', async (req, res) => {

    try {
        const {id} = req.params; //string
        const data = req.body;
        
        const result = await collection.updateOne({_id:new ObjectId(id)},{$set:{...data, updatedAt: new Date()}});
        if (result.matchedCount) {
            //수정된 문서가 있는 경우
            res.status(200).json(result);
            return ;
        } 
        //수정된 문서가 없는 경우
        res.status(404).json({message : "user not found or No change😥"});
    } catch (error) {
        console.log(`💥Error updating user: ${error}`);
        res.status(500).json({message: `💥Error updating users`, error: error.message})
    }
    
})

// 데이터 삭제
app.delete('/users/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const result = await collection.deleteOne({_id: new ObjectId(id)});
        
        if(result.deletedCount) {
            res.status(200).json({message : "User deleted.", id});
            return ;
        }
        res.status(404).json({message : "user not found or No change😣", error:error.message});
    } catch (error) {
        console.log(`💥Error updating user: ${error}`);
        res.status(500).json({message: `💥Error deleting users`, error: error.message})
    }
})

const connectDB = async () => {
    try {
        //DB와의 연결 시도
        await client.connect();
        console.log("❤MONGODB Connect!");
    } catch (error) {
        console.log(`⚠ MongoDB Error : ${error}`);
    }
}

app.listen(PORT, () => {
    console.log("server running at..", PORT);
    console.log(process.env.MONGODB_URI);
    connectDB();
});