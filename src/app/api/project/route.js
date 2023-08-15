import db from "@/lib/db";
import Project from "@/models/project";




export async function GET(req){
    await db.connect()

    try {
        const projects = await Project.find({});
        return new Response(JSON.stringify(projects),{status:200})

        
    } catch (error) {
        return new Response(JSON.stringify(null),{status:500})
    }
}

export async function POST(req){
   
    try {
        await db.connect();

        const {title, desc, liveLink,githubLink} =await req.json();

        const isExisting = await Project.findOne({title});

        if(isExisting){
            throw new Error("Bu Proje Zaten Kayıtlı");
        }
    


        const newProject = await Project.create({
            title, desc, liveLink,githubLink
        });

        const projects = newProject._doc;

        return new Response(JSON.stringify(projects),{status: 200});
        
    } catch (error) {
        return new Response (JSON.stringify(error.message),{status: 500});
    }
}
