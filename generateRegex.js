function generateRegex(urlParts) {
    const re = new RegExp(/\{[^}]*\}/); // find variable enclosed with {}
    const allCharRegexString = "[^\\n ]*";
    let regexString = "/";
    for(i = 1; i<urlParts.length; i++){
        if(!re.test(urlParts[i])) regexString += urlParts[i] ;
        else regexString += allCharRegexString ;

        if(i !== urlParts.length - 1) regexString += "/"
    }
    return regexString;
}
