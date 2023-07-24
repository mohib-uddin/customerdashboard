const useTodo=(todoItem)=>{
    const data={
        PaperWork:false,
        VideoConsultation:false,
        FirstExperience:true,
        SecondExperience:true,
        FollowupConsult:true,
        ThirdExperience:true,
        FourthExperience:true,
    }
    const status=data[todoItem]
    return{
       status
    }


}

export default useTodo;