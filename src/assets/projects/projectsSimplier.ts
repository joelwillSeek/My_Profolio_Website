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
    links:{icon:string; linkLabel:string; uriLink:string;}[]
}

const honourProject:descriptionType={
    id:1,
    title:"Honour Relationships: Connect Smarterr",
    description:"Manage your network like never before. Honour Relationships, a Flutter app, employs graph data structures to visually organize your connections. Get smart reminders for every interaction and effectively re-engage with past relationships on the Recycling Page. Build, maintain, and truly honour your relationships.",
    image:honourImage,
    category:category.mobile,
    technologies:[{label:"Supabase",iconName:"fa-solid fa-database"},{label:"Flutter",iconName:"fa-brands fa-flutter  mr-2"}],
    links:[{icon:"fa-brands fa-google-play",linkLabel:"Google Playstore",uriLink:"https://play.google.com/store/apps/details?id=com.joelthousend.honour.honour&pcampaignid=web_share"},{icon:"fa-brands fa-github",linkLabel:'Github',uriLink:""}]
  
}

export default [
   honourProject
]