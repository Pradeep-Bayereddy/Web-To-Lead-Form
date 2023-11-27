function beforesubmit(){
    let inputdate = document.querySelector(".inputdate");
    let outputdate = document.querySelector(".outputdate");
    console.log("inputdate.value ", inputdate.value); //string --> date (en_IN) --> UserInfo.getLocale() in APEX


    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formattedDate;

}
