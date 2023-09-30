//Your JavaScript goes in here
var enableButton=document.getElementById("enable");
var purzeButton=document.getElementById("purze")
var valvePositioning = document.querySelector("#flow-rate-slider")
var svg=document.getElementById("Layer_1");
var valvePositioningText = document.getElementById("valve-positioning-text");
var manometerText = document.getElementById("manometer-text")
var count=0

var w2 = document.getElementById("Water_3")
var w3 = document.getElementById("Water_4")
var w4 = document.getElementById("Water_5")
var w8 = document.getElementById("Water_6")
var w9 = document.getElementById("Water_7")
var m_r = document.getElementById("manometer-right")
var m_l = document.getElementById("manometer-left")
var m_m = document.getElementById("manometer-middle")
var wM1 = document.getElementById("WaterM_1")
var wM2 = document.getElementById("WaterM_2")
var wM3 = document.getElementById("WaterM_3")
var wM4 = document.getElementById("WaterM_4")
var wM5 = document.getElementById("WaterM_5")
var wM6 = document.getElementById("WaterM_6")
var wM7 = document.getElementById("WaterM_7")



function power(){
    if(count==0){
        enableButton.style.backgroundColor="#4cae4c"
        document.getElementById("steps").innerHTML="Please wait until the water reaches the Flow Rate Valve."
        enableButton.textContent = "POWER OFF"
        count=1

        waterFlow3()
    }else{
        enableButton.style.backgroundColor = "#ca2222"
        document.getElementById("steps").innerHTML = "Step1: Turn Power On"
        enableButton.textContent = "POWER ON"
        count = 0
    }
}


function waterFlow3(){
    w2.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "340");
    animateElement.setAttribute("dur", "5s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");
    animateElement.setAttribute("values", "0;340");
    animateElement.setAttribute("keyTimes", "0;1");
    animateElement.setAttribute("calcMode", "spline");
    animateElement.setAttribute("keySplines", "0.42 0 0.58 1");

    w2.appendChild(animateElement)

    animateElement.beginElement();

    setTimeout(function(){
        waterFlow4()
    },5000);
}

function waterFlow4(){


    w3.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "77.5");
    animateElement.setAttribute("dur", "1.5s");
    animateElement.setAttribute("fill","freeze");

    w3.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "1013.5");
    animateX.setAttribute("to", "936");
    animateX.setAttribute("dur", "1.5s");
    animateX.setAttribute("fill","freeze");

    w3.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        document.getElementById("steps").innerHTML = "Choose a value on the valve positioning slider to regulate the water flow."
        valvePositioning.disabled = false
      }, 1500);
    
}


function waterFlow5(){
    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "93.8");
    animateElement.setAttribute("dur", "2.5s");
    animateElement.setAttribute("fill","freeze");

    w4.appendChild(animateElement)
    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "923.8");
    animateX.setAttribute("to", "830.1");
    animateX.setAttribute("dur", "2.5s");
    animateX.setAttribute("fill","freeze");

    w4.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        
        m_r.setAttribute("opacity","1")

        waterFlowM1()
        waterFlowM2()
        waterFlowM3()

        waterFlow6()


      }, 2500);
    
}

function waterFlow6(){
    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "50.9");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("fill","freeze");

    m_m.appendChild(animateElement)
    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "665.6");
    animateX.setAttribute("to", "614.7");
    animateX.setAttribute("dur", "1s");
    animateX.setAttribute("fill","freeze");

    m_m.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();


    setTimeout(function() {
        waterFlowM4()
      }, 500);

    setTimeout(function() {
        m_l.setAttribute("opacity","1")
        waterFlowM5()
        waterFlowM6()
        waterFlowM7()

        waterFlow8()

      }, 1000);
    
}




function waterFlowM1(){
    wM1.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "85.5");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    wM1.appendChild(animateElement)

    animateElement.beginElement();
}

function waterFlowM2(){
    wM2.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "77.6");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    wM2.appendChild(animateElement)

    animateElement.beginElement();
}

function waterFlowM3(){
    wM3.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "60.7");
    animateElement.setAttribute("dur", "1");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    wM3.appendChild(animateElement)

    animateElement.beginElement();
}

function waterFlowM4(){
    wM4.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "37.7");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    wM4.appendChild(animateElement)

    animateElement.beginElement();
}

function waterFlowM5(){
    wM5.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "44.6");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    wM5.appendChild(animateElement)

    animateElement.beginElement();
}

function waterFlowM6(){
    wM6.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "52.9");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    wM6.appendChild(animateElement)

    animateElement.beginElement();
}

function waterFlowM7(){
    wM7.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "56.6");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    wM7.appendChild(animateElement)

    animateElement.beginElement();
}

function waterFlow8(){
    w8.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "170.8");
    animateElement.setAttribute("dur", "2s");
    animateElement.setAttribute("fill","freeze");

    w8.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "454.8");
    animateX.setAttribute("to", "284");
    animateX.setAttribute("dur", "2s");
    animateX.setAttribute("fill","freeze");

    w8.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        waterFlow9()
      }, 2000);

}

function waterFlow9(){
    var currentHeight = parseFloat(w9.getAttribute("height"))
    
    if (currentHeight < 297.1) {
        currentHeight += 3;
        w9.setAttribute("height", currentHeight);
        setTimeout(waterFlow10, 100); 
    }
    setTimeout(function() {
        // waterTankBase.setAttribute("opacity","1")
        // waterFlow13()
      }, 5000);
}

function updateValvePositioning()  {
    // stopAnimation()
    // shouldStop=false
    // displayArrows()
    // reset()
    // resetTimer()
    // var selectedValue = valvePositioning.value;
    // valvePositioningText.textContent = selectedValue;
    waterFlow5() 
    // valvePositioning.disabled = true;
}