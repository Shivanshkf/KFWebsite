
document.getElementById('calculateButton').addEventListener('click', calculateBudget);


function initializeWithDashes() {
    document.getElementById('total-cost').innerText = 'Rs. ----------';
    document.getElementById('area-value').innerText = '---';
    resetParticularsToDashes();
}

function resetParticularsToDashes() {
    const particulars = ['signages-cost-value', 'fixtures-cost-value', 'office-cost-value', 'airconditioning-cost-value', 'itEquipments-cost-value', 'equipment-cost-value', 'electricals-cost-value', 'chillerfreezers-cost-value', 'security-cost-value'];
    particulars.forEach(particular => {
        document.getElementById(particular).innerText = '---';
    });
}

function calculateBudget() {
    var area = parseFloat(document.getElementById('area').value);
    if (!isNaN(area) && area > 0) {
        var fixturesCost = 275 * area;
        var fixturesBackOfficeCost = 35 * area; // This value was missing in the final display
        var airConditioningCost = 225 * area;
        var equipmentCost = 30 * area;
        var electricalsCost = 175 * area;
        var chillerFreezersCost = 180 * area;
        var securityCost = 45 * area;
        var itEquipmentsCost = 300 * area;
        var signageCost = 120000; // Fixed cost

        var totalCost = fixturesCost + fixturesBackOfficeCost + airConditioningCost + equipmentCost + electricalsCost + chillerFreezersCost + securityCost + itEquipmentsCost + signageCost;

        // Update displayed values
        document.getElementById('total-cost').innerText = 'Rs. ' + totalCost.toFixed(2);
        document.getElementById('area-value').innerText = area.toFixed(0);

        // Update dynamic cost values for particulars
        document.getElementById('signages-cost-value').innerText = 'Rs. ' + signageCost.toFixed(2);
        document.getElementById('fixtures-cost-value').innerText = 'Rs. ' + fixturesCost.toFixed(2);
        document.getElementById('office-cost-value').innerText = 'Rs. ' + fixturesBackOfficeCost.toFixed(2);
        document.getElementById('airconditioning-cost-value').innerText = 'Rs. ' + airConditioningCost.toFixed(2);
        document.getElementById('itEquipments-cost-value').innerText = 'Rs. ' + itEquipmentsCost.toFixed(2);
        document.getElementById('equipment-cost-value').innerText = 'Rs. ' + equipmentCost.toFixed(2);
        document.getElementById('electricals-cost-value').innerText = 'Rs. ' + electricalsCost.toFixed(2);
        document.getElementById('chillerfreezers-cost-value').innerText = 'Rs. ' + chillerFreezersCost.toFixed(2);
        document.getElementById('security-cost-value').innerText = 'Rs. ' + securityCost.toFixed(2);
    } else {
        // If input is not a valid number, display dashes
        initializeWithDashes();
    }
}


// Call initializeWithDashes at script load to set initial values to dashes
initializeWithDashes();
