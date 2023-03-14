function labels(tagname,attrname,attrvalue,content){
    var labels = document.createElement(tagname);
    labels.setAttribute(attrname,attrvalue);
    labels.innerHTML=content;
    return labels;
}
function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var inputs = document.createElement(tagname);
    inputs.setAttribute(attrname,attrvalue);
    inputs.setAttribute(attrname1,attrvalue1);
    inputs.setAttribute(attrname2,attrvalue2);
    return inputs;
}
function linebreak(tagname){
    var br = document.createElement(tagname);
    return br;
}
function button(tagname,attrname,attrvalue,content){
    var button = document.createElement(tagname);
    button.setAttribute(attrname,attrvalue);
    button.innerHTML = content;
   return button;

}

var fname = labels("label","for","firstname","firstname");
var br = linebreak("br");
var finput = inputs("input","type","text","name","firstname","id","firstname");
var br1 = linebreak("br");

var mname = labels("label","for","middlename","middlename");
var br2 = linebreak("br");
var minput = inputs("input","type","text","name","middlename","id","middlename");
var br3 = linebreak("br");

var lname = labels("label","for","lastname","lastname");
var br4 = linebreak("br");
var linput = inputs("input","type","text","name","lastname","id","lastname");
var br5 = linebreak("br");

var emaillabel = labels("label","for","email","email");
var br6 = linebreak("br");
var einput = inputs("input","type","email","name","email","id","email");
var br7 = linebreak("br");

var pname = labels("label","for","password","password");
var br8 = linebreak("br");
var pinput = inputs("input","type","password","name","password","id","password");
var br9 = linebreak("br");
var br10 = linebreak("br");
var buttoninput = button("button","type","submit","Submit");

document.body.append(fname,br,finput,br1,mname,br2,minput,br3,lname,br4,linput,br5,emaillabel,br6,einput,br7,pname,br8,pinput,br9,br10,buttoninput);
