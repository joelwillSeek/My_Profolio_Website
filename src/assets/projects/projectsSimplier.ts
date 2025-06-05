import honourImage from "./honour/images/1.jpg";

const category={
    mobile:"Mobile"
}

export type descriptionType={
      id: number,
    title: string,
    description:
     string,
    image:
   string,
    category: string,
    technologies: {label:string,iconName:string,}[],
    
}

const honourProject:descriptionType={
    id:1,
    title:"Honour Relationships: Connect Smarterr",
    description:"Manage your network like never before. Honour Relationships, a Flutter app, employs graph data structures to visually organize your connections. Get smart reminders for every interaction and effectively re-engage with past relationships on the Recycling Page. Build, maintain, and truly honour your relationships.",
    image:honourImage,
    category:category.mobile,
    technologies:[{label:"Supabase",iconName:"fa-solid fa-database"},{label:"Flutter",iconName:"fa-brands fa-flutter  mr-2"}],
  
}

export default [
   honourProject
]