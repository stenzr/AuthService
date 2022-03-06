const validator= require("validator");
const isEmpty =require("is-empty");

module.exports = data => {
    
    let errors = {};

    let {title , body } =data;


    if(!isEmpty(title)){
        title=title;
    }

    else{
        title="";
    }

    if(!isEmpty(body)){
        body=body;
    }

    else{
        body="";
    }



    if(validator.isEmpty(title)){
       errors.title="Title is Required";
    }

    if(validator.isEmpty(body)){
        errors.body = "Body is Required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
     };

};