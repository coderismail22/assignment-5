// Utility Functions:

function getInputValue(inputId) {
    const polygonFirstInput = document.getElementById(inputId);
    const polygonFirstValueString = polygonFirstInput.value;
    const polygonFirstValue = parseFloat(polygonFirstValueString);

    return polygonFirstValue;

}

// Triangle:
document.getElementById('btn-triangle-calculate').addEventListener('click', function () {

    const triangleFirstValue = getInputValue('triangle-input-b');
    const triangleSecondValue = getInputValue('triangle-input-h');

    const triangleArea = .5 * triangleFirstValue * triangleSecondValue;

    const areaCalculation = document.getElementById('triangle-area');
    areaCalculation.innerText = triangleArea;
    return areaCalculation;
})

// Rectangle:
document.getElementById('btn-rectangle-calculate').addEventListener('click',function(){
    const rectangleFirstValue = getInputValue('rectangle-input-w');
    const rectangleSecondValue = getInputValue('rectangle-input-l');

    const rectangleArea = rectangleFirstValue*rectangleSecondValue;

    const areaCalculation = document.getElementById('rectangle-area');
    areaCalculation.innerText= rectangleArea;
    return areaCalculation;

})



