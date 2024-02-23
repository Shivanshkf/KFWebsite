function calculateBudget() {
    var area = parseFloat(document.getElementById('area').value);
    var fixturesCost = 250 * area;
    var fixturesBackOfficeCost = 30 * area;
    var airConditioningCost = 200 * area;
    var equipmentCost = 25 * area;
    var electricalsCost = 150 * area;
    var chillerFreezersCost = 160 * area;
    var securityCost = 35 * area;
    var itEquipmentsCost = 250 * area;
    var signageCost = 100000; // Fixed cost

    var totalCost = fixturesCost + fixturesBackOfficeCost + airConditioningCost + equipmentCost + electricalsCost + chillerFreezersCost + securityCost + itEquipmentsCost + signageCost;

    var output = `<h2>Budget Calculation</h2>`;
    output += `<p>Fixtures: Rs ${fixturesCost}</p>`;
    output += `<p>Fixtures Back Office: Rs ${fixturesBackOfficeCost}</p>`;
    output += `<p>Air Conditioning: Rs ${airConditioningCost}</p>`;
    output += `<p>Equipment: Rs ${equipmentCost}</p>`;
    output += `<p>Electricals: Rs ${electricalsCost}</p>`;
    output += `<p>Chiller/Freezers: Rs ${chillerFreezersCost}</p>`;
    output += `<p>Security and Loss Prevention: Rs ${securityCost}</p>`;
    output += `<p>IT Equipments: Rs ${itEquipmentsCost}</p>`;
    output += `<p>Signages: Rs ${signageCost}</p>`;
    output += `<h3>Total Cost: Rs ${totalCost}</h3>`;

    document.getElementById('output').innerHTML = output;
}
