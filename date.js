
exports.getDate=function  (){
    const currentDate = new Date();
    const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
    };

    return currentDate.toLocaleDateString('en-US', options);

     
}


exports.getDay=function  getDay(){
    const currentDate = new Date();
    const options = { 
    weekday:"long" 
    };

    return currentDate.toLocaleDateString('en-US', options);

    
}

