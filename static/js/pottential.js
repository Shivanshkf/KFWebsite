document.addEventListener("DOMContentLoaded", function () {
  // Attach click event listeners to city category options
  const cityCategoryOptions = document.querySelectorAll("#cityCategory .radio-option");
  cityCategoryOptions.forEach(option => {
      option.addEventListener("click", function () {
          updateRadioSelection(cityCategoryOptions, this, "cityCategory");
        //   updateClassificationResult();
      });
  });

  // Attach click event listeners to city tier options
  const cityTierOptions = document.querySelectorAll("#cityTier .radio-option");
  cityTierOptions.forEach(option => {
      option.addEventListener("click", function () {
          updateRadioSelection(cityTierOptions, this, "cityTier");
        //   updateClassificationResult();
      });
  });

  // Attach event listeners to other input fields
  document.getElementById("storeSize").addEventListener("input", function () {
   
});
document.getElementById("monthlySales").addEventListener("input", function () {
    
});

// Keep this event listener as it is
document.getElementById("calculateSales").addEventListener("click", updateClassificationResult);
});

let selectedCityCategory = "";
let selectedCityTier = "";

function updateRadioSelection(optionGroup, selectedOption, category) {
    optionGroup.forEach(option => {
        if (option === selectedOption) {
            option.classList.add("selected");
            const value = option.getAttribute("data-value");
            sessionStorage.setItem(category, value);
            if (category === 'cityCategory') {
                selectedCityCategory = value;
            } else if (category === 'cityTier') {
                selectedCityTier = value;
            }
        } else {
            option.classList.remove("selected");
        }
    });
}

function updateClassificationResult() {
  const storeSizeValue = document.getElementById("storeSize").value.replace(/[^0-9]/g, '');
  const monthlySalesValue = document.getElementById("monthlySales").value.replace(/[^0-9]/g, '');

  const storeSize = parseInt(storeSizeValue, 10) || 0;
  const monthlySales = parseInt(monthlySalesValue, 10) || 0;

  console.log("Updating classification result...");
  console.log("Store Size (parsed):", storeSize);
  console.log("Monthly Sales (parsed):", monthlySales);
  console.log("Selected City Category:", selectedCityCategory);
  console.log("Selected City Tier:", selectedCityTier);

  // This part assumes classifySales function is defined and accessible
  // Please make sure to adapt this code to match how your classifySales function outputs data
  if (storeSize && selectedCityCategory && selectedCityTier && monthlySales) {
      // Assume classifySales returns an array in the order you defined
      const [analysis, minSalePerSqFt, avgSalePerSqFt, bestSalePerSqFt, minSaleTotal, avgSaleTotal, bestSaleTotal] =
          classifySales(selectedCityTier, selectedCityCategory, monthlySales, storeSize);

      // Update the table with new data
      const resultTable = document.querySelector("#result table tbody");
      resultTable.rows[0].cells[1].innerText = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(minSaleTotal); // Minimum Sales Total
      resultTable.rows[1].cells[1].innerText = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(avgSaleTotal); // Average Sales Total
      resultTable.rows[2].cells[1].innerText = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(bestSaleTotal); // Best in Class Sales Total

      // Update the classification text
      document.getElementById('sales-analysis').innerText = analysis;
  } else {
      document.getElementById('sales-analysis').innerText = "Please fill in all fields to see classification.";
  }
}

const conditionAnalysis = {
  "Below": "Your sales are less than even the minimum level - You have immense possibilities",
  "Equal min (5-10% Variance)": "Your sales are just at the minimum level - You have immense possibilities",
  "Above & below Avg.": "Your sales are less than average - You should do much better",
  "Equal avg (5-10% Variance)": "Your sales are average - There is great scope for you",
  "Above & below Best": "Your sales are better than average - There is scope to do still better",
  "Equal max (5-10% Variance)": "Your sales are among the best - Congratulations! You may still want to better it",
  "Above": "You are among the top performers - You could guide others from the community"
};

const data = [
  {"City": "Tier1", "Area": "High Street", "Sales Per Sq. Ft.": 2500, "Parameter": "Min", "Condition": "Below"},
    {"City": "Tier1", "Area": "High Street", "Sales Per Sq. Ft.": 2500, "Parameter": "Minimum",
     "Condition": "Equal min (5-10% Variance)"},
    {"City": "Tier1", "Area": "High Street", "Sales Per Sq. Ft.": 2500, "Parameter": "Min",
     "Condition": "Above & below Avg."},
    {"City": "Tier1", "Area": "High Street", "Sales Per Sq. Ft.": 3500, "Parameter": "Average",
     "Condition": "Equal avg (5-10% Variance)"},
    {"City": "Tier1", "Area": "High Street", "Sales Per Sq. Ft.": 3500, "Parameter": "Avg",
     "Condition": "Above & below Best"},
    {"City": "Tier1", "Area": "High Street", "Sales Per Sq. Ft.": 5000, "Parameter": "Best",
     "Condition": "Equal max (5-10% Variance)"},
    {"City": "Tier1", "Area": "High Street", "Sales Per Sq. Ft.": 5000, "Parameter": "Max", "Condition": "Above"},
    {"City": "Tier1", "Area": "Residential", "Sales Per Sq. Ft.": 2000, "Parameter": "Min", "Condition": "Below"},
    {"City": "Tier1", "Area": "Residential", "Sales Per Sq. Ft.": 2000, "Parameter": "Minimum",
     "Condition": "Equal min (5-10% Variance)"},
    {"City": "Tier1", "Area": "Residential", "Sales Per Sq. Ft.": 2000, "Parameter": "Min",
     "Condition": "Above & below Avg."},
    {"City": "Tier1", "Area": "Residential", "Sales Per Sq. Ft.": 3000, "Parameter": "Average",
     "Condition": "Equal avg (5-10% Variance)"},
    {"City": "Tier1", "Area": "Residential", "Sales Per Sq. Ft.": 3000, "Parameter": "Avg",
     "Condition": "Above & below Best"},
    {"City": "Tier1", "Area": "Residential", "Sales Per Sq. Ft.": 4000, "Parameter": "Best",
     "Condition": "Equal max (5-10% Variance)"},
    {"City": "Tier1", "Area": "Residential", "Sales Per Sq. Ft.": 4000, "Parameter": "Max", "Condition": "Above"},
    {"City": "Tier1", "Area": "Low rent area", "Sales Per Sq. Ft.": 1500, "Parameter": "Min", "Condition": "Below"},
    {"City": "Tier1", "Area": "Low rent area", "Sales Per Sq. Ft.": 1500, "Parameter": "Minimum",
     "Condition": "Equal min (5-10% Variance)"},
    {"City": "Tier1", "Area": "Low rent area", "Sales Per Sq. Ft.": 1500, "Parameter": "Min",
     "Condition": "Above & below Avg."},
    {"City": "Tier1", "Area": "Low rent area", "Sales Per Sq. Ft.": 2500, "Parameter": "Average",
     "Condition": "Equal avg (5-10% Variance)"},
    {"City": "Tier1", "Area": "Low rent area", "Sales Per Sq. Ft.": 2500, "Parameter": "Avg",
     "Condition": "Above & below Best"},
    {"City": "Tier1", "Area": "Low rent area", "Sales Per Sq. Ft.": 3500, "Parameter": "Best",
     "Condition": "Equal max (5-10% Variance)"},
    {"City": "Tier1", "Area": "Low rent area", "Sales Per Sq. Ft.": 3500, "Parameter": "Max", "Condition": "Above"},
    {"City": "Tier2", "Area": "High Street", "Sales Per Sq. Ft.": 2500, "Parameter": "Min", "Condition": "Below"},
    {"City": "Tier2", "Area": "High Street", "Sales Per Sq. Ft.": 2500, "Parameter": "Minimum",
     "Condition": "Equal min (5-10% Variance)"},
    {"City": "Tier2", "Area": "High Street", "Sales Per Sq. Ft.": 2500, "Parameter": "Min",
     "Condition": "Above & below Avg."},
    {"City": "Tier2", "Area": "High Street", "Sales Per Sq. Ft.": 3000, "Parameter": "Average",
     "Condition": "Equal avg (5-10% Variance)"},
    {"City": "Tier2", "Area": "High Street", "Sales Per Sq. Ft.": 3000, "Parameter": "Avg",
     "Condition": "Above & below Best"},
    {"City": "Tier2", "Area": "High Street", "Sales Per Sq. Ft.": 3500, "Parameter": "Best",
     "Condition": "Equal max (5-10% Variance)"},
    {"City": "Tier2", "Area": "High Street", "Sales Per Sq. Ft.": 3500, "Parameter": "Max", "Condition": "Above"},
    {"City": "Tier2", "Area": "Residential", "Sales Per Sq. Ft.": 2000, "Parameter": "Min", "Condition": "Below"},
    {"City": "Tier2", "Area": "Residential", "Sales Per Sq. Ft.": 2000, "Parameter": "Minimum",
     "Condition": "Equal min (5-10% Variance)"},
    {"City": "Tier2", "Area": "Residential", "Sales Per Sq. Ft.": 2000, "Parameter": "Min",
     "Condition": "Above & below Avg."},
    {"City": "Tier2", "Area": "Residential", "Sales Per Sq. Ft.": 2500, "Parameter": "Average",
     "Condition": "Equal avg (5-10% Variance)"},
    {"City": "Tier2", "Area": "Residential", "Sales Per Sq. Ft.": 2500, "Parameter": "Avg",
     "Condition": "Above & below Best"},
    {"City": "Tier2", "Area": "Residential", "Sales Per Sq. Ft.": 3000, "Parameter": "Best",
     "Condition": "Equal max (5-10% Variance)"},
    {"City": "Tier2", "Area": "Residential", "Sales Per Sq. Ft.": 3000, "Parameter": "Max", "Condition": "Above"},
    {"City": "Tier2", "Area": "Low rent area", "Sales Per Sq. Ft.": 1500, "Parameter": "Min", "Condition": "Below"},
    {"City": "Tier2", "Area": "Low rent area", "Sales Per Sq. Ft.": 1500, "Parameter": "Minimum",
     "Condition": "Equal min (5-10% Variance)"},
    {"City": "Tier2", "Area": "Low rent area", "Sales Per Sq. Ft.": 1500, "Parameter": "Min",
     "Condition": "Above & below Avg."},
    {"City": "Tier2", "Area": "Low rent area", "Sales Per Sq. Ft.": 2000, "Parameter": "Average",
     "Condition": "Equal avg (5-10% Variance)"},
    {"City": "Tier2", "Area": "Low rent area", "Sales Per Sq. Ft.": 2000, "Parameter": "Avg",
     "Condition": "Above & below Best"},
    {"City": "Tier2", "Area": "Low rent area", "Sales Per Sq. Ft.": 2500, "Parameter": "Best",
     "Condition": "Equal max (5-10% Variance)"},
    {"City": "Tier2", "Area": "Low rent area", "Sales Per Sq. Ft.": 2500, "Parameter": "Max", "Condition": "Above"},
    {"City": "Tier3", "Area": "High Street", "Sales Per Sq. Ft.": 2000, "Parameter": "Min", "Condition": "Below"},
    {"City": "Tier3", "Area": "High Street", "Sales Per Sq. Ft.": 2000, "Parameter": "Minimum",
     "Condition": "Equal min (5-10% Variance)"},
    {"City": "Tier3", "Area": "High Street", "Sales Per Sq. Ft.": 2000, "Parameter": "Min",
     "Condition": "Above & below Avg."},
    {"City": "Tier3", "Area": "High Street", "Sales Per Sq. Ft.": 2500, "Parameter": "Average",
     "Condition": "Equal avg (5-10% Variance)"},
    {"City": "Tier3", "Area": "High Street", "Sales Per Sq. Ft.": 2500, "Parameter": "Avg",
     "Condition": "Above & below Best"},
    {"City": "Tier3", "Area": "High Street", "Sales Per Sq. Ft.": 3000, "Parameter": "Best",
     "Condition": "Equal max (5-10% Variance)"},
    {"City": "Tier3", "Area": "High Street", "Sales Per Sq. Ft.": 3000, "Parameter": "Max", "Condition": "Above"},
    {"City": "Tier3", "Area": "Residential", "Sales Per Sq. Ft.": 1500, "Parameter": "Min", "Condition": "Below"},
    {"City": "Tier3", "Area": "Residential", "Sales Per Sq. Ft.": 1500, "Parameter": "Minimum",
     "Condition": "Equal min (5-10% Variance)"},
    {"City": "Tier3", "Area": "Residential", "Sales Per Sq. Ft.": 1500, "Parameter": "Min",
     "Condition": "Above & below Avg."},
    {"City": "Tier3", "Area": "Residential", "Sales Per Sq. Ft.": 2000, "Parameter": "Average",
     "Condition": "Equal avg (5-10% Variance)"},
    {"City": "Tier3", "Area": "Residential", "Sales Per Sq. Ft.": 2000, "Parameter": "Avg",
     "Condition": "Above & below Best"},
    {"City": "Tier3", "Area": "Residential", "Sales Per Sq. Ft.": 2500, "Parameter": "Best",
     "Condition": "Equal max (5-10% Variance)"},
    {"City": "Tier3", "Area": "Residential", "Sales Per Sq. Ft.": 2500, "Parameter": "Max", "Condition": "Above"},
    {"City": "Tier3", "Area": "Low rent area", "Sales Per Sq. Ft.": 1500, "Parameter": "Min", "Condition": "Below"},
    {"City": "Tier3", "Area": "Low rent area", "Sales Per Sq. Ft.": 1500, "Parameter": "Minimum",
     "Condition": "Equal min (5-10% Variance)"},
    {"City": "Tier3", "Area": "Low rent area", "Sales Per Sq. Ft.": 1500, "Parameter": "Min",
     "Condition": "Above & below Avg."},
    {"City": "Tier3", "Area": "Low rent area", "Sales Per Sq. Ft.": 1500, "Parameter": "Average",
     "Condition": "Equal avg (5-10% Variance)"},
    {"City": "Tier3", "Area": "Low rent area", "Sales Per Sq. Ft.": 1500, "Parameter": "Avg",
     "Condition": "Above & below Best"},
    {"City": "Tier3", "Area": "Low rent area", "Sales Per Sq. Ft.": 1500, "Parameter": "Best",
     "Condition": "Equal max (5-10% Variance)"},
    {"City": "Tier3", "Area": "Low rent area", "Sales Per Sq. Ft.": 1500, "Parameter": "Max", "Condition": "Above"}
];

function classifySales(city, area, monthlySales, storeSize) {
  const salesPerSqFt = monthlySales / storeSize;

  let minSalesPerSqFt = Infinity;
  let avgSalesPerSqFt = 0;
  let bestSalesPerSqFt = 0;
  let minSalesTotal = 0;
  let avgSalesTotal = 0;
  let bestSalesTotal = 0;

  data.forEach(record => {
      if (record.City === city && record.Area === area) {
          if (record.Parameter === "Minimum" && record["Sales Per Sq. Ft."] < minSalesPerSqFt) {
              minSalesPerSqFt = record["Sales Per Sq. Ft."];
              minSalesTotal = minSalesPerSqFt * storeSize;
          } else if (record.Parameter === "Average") {
              avgSalesPerSqFt = record["Sales Per Sq. Ft."];
              avgSalesTotal = avgSalesPerSqFt * storeSize;
          } else if (record.Parameter === "Best") {
              bestSalesPerSqFt = record["Sales Per Sq. Ft."];
              bestSalesTotal = bestSalesPerSqFt * storeSize;
          }
      }
  });

  let condition = "";
  if (salesPerSqFt < minSalesPerSqFt * 0.9) {
      condition = "Below";
  } else if (minSalesPerSqFt * 0.9 <= salesPerSqFt && salesPerSqFt < minSalesPerSqFt * 1.1) {
      condition = "Equal min (5-10% Variance)";
  } else if (minSalesPerSqFt * 1.1 <= salesPerSqFt && salesPerSqFt < avgSalesPerSqFt * 0.9) {
      condition = "Above & below Avg.";
  } else if (avgSalesPerSqFt * 0.9 <= salesPerSqFt && salesPerSqFt < avgSalesPerSqFt * 1.1) {
      condition = "Equal avg (5-10% Variance)";
  } else if (avgSalesPerSqFt * 1.1 <= salesPerSqFt && salesPerSqFt < bestSalesPerSqFt * 0.9) {
      condition = "Above & below Best";
  } else if (bestSalesPerSqFt * 0.9 <= salesPerSqFt && salesPerSqFt < bestSalesPerSqFt * 1.1) {
      condition = "Equal max (5-10% Variance)";
  } else if (salesPerSqFt >= bestSalesPerSqFt * 1.1) {
      condition = "Above";
  }

  const analysis = conditionAnalysis[condition] || "No matching record found";

  return [analysis, minSalesPerSqFt, avgSalesPerSqFt, bestSalesPerSqFt, minSalesTotal, avgSalesTotal, bestSalesTotal];
}

