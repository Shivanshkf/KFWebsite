
$(document).ready(function () {
    // Code for setting the slider values for store size
    const range = document.getElementById('range'),
          tooltip = document.getElementById('tooltip'),
          setValue = () => {
              const newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
                    newPosition = 10 - (newValue * 0.2);
              tooltip.innerHTML = `<span>${range.value}</span>`;
              tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
          };
    document.addEventListener("DOMContentLoaded", setValue);
    range.addEventListener('input', setValue);

    // Code for setting the slider values for monthly sales
    const range2 = document.getElementById('range2'),
          tooltip2 = document.getElementById('tooltip2'),
          setValue2 = () => {
              const newValue2 = Number((range2.value - range2.min) * 100 / (range2.max - range2.min)),
                    newPosition2 = 10 - (newValue2 * 0.2);
              tooltip2.innerHTML = `<span>${range2.value}</span>`;
              tooltip2.style.left = `calc(${newValue2}% + (${newPosition2}px))`;
          };
    document.addEventListener("DOMContentLoaded", setValue2);
    range2.addEventListener('input', setValue2);

    // Existing code for setting up radio button behavior
    $('.radio-option').click(function () {
        $('.radio-option').removeClass('selected');
        $(this).addClass('selected');
    });

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
        let salesPerSqFt = monthlySales / storeSize;
        let minSales = Infinity;
        let avgSales = 0;
        let bestSales = 0;
      
        // Find the minimum, average, and best sales per sq ft for the given city and area
        data.forEach((record) => {
          if (record.City === city && record.Area === area) {
            if (record.Parameter === "Minimum" && record["Sales Per Sq. Ft."] < minSales) {
              minSales = record["Sales Per Sq. Ft."];
            } else if (record.Parameter === "Average") {
              avgSales = record["Sales Per Sq. Ft."];
            } else if (record.Parameter === "Best") {
              bestSales = record["Sales Per Sq. Ft."];
            }
          }
        });
      
        let condition = "";
        if (sales_per_sq_ft < min_sales * 0.9) {
            condition = "Below";
        } else if (min_sales * 0.9 <= sales_per_sq_ft && sales_per_sq_ft < min_sales * 1.1) { // Allowing 10% variance for 'min'
            condition = "Equal min (5-10% Variance)";
        } else if (min_sales * 1.1 <= sales_per_sq_ft && sales_per_sq_ft < avg_sales * 0.9) {
            condition = "Above & below Avg.";
        } else if (avg_sales * 0.9 <= sales_per_sq_ft && sales_per_sq_ft < avg_sales * 1.1) { // Allowing 10% variance for 'average'
            condition = "Equal avg (5-10% Variance)";
        } else if (avg_sales * 1.1 <= sales_per_sq_ft && sales_per_sq_ft < best_sales * 0.9) {
            condition = "Above & below Best";
        } else if (best_sales * 0.9 <= sales_per_sq_ft && sales_per_sq_ft < best_sales * 1.1) { // Allowing 10% variance for 'max'
            condition = "Equal max (5-10% Variance)";
        } else if (sales_per_sq_ft >= best_sales * 1.1) {
            condition = "Above";
        }
      
        return conditionAnalysis[condition] || "No matching record found";
      }
      
      // Event listener for form submission
    //   document.getElementById('your-form-id').addEventListener('submit', function(event) {
    //     event.preventDefault(); // Prevent the form from submitting in the traditional way
      
    //     const city = document.getElementById('city-input').value;
    //     const area = document.getElementById('area-input').value;
    //     const monthlySales = parseFloat(document.getElementById('monthly-sales-input').value);
    //     const storeSize = parseFloat(document.getElementById('store-size-input').value);
      
    //     const analysis = classifySales(city, area, monthlySales, storeSize);
      
    //     // Display the results
    //     document.getElementById('results-display').textContent = analysis;
    //   });
  
      function calculateSalesPotential() {
        // Get the selected area type
        let areaType = $('.radio-option.selected').attr('data-value');
        // Get the selected city tier
        let cityTier = $('input[name="cityTier"]:checked').val();

        // Convert tier to proper format (e.g., "Tier1")
        cityTier = cityTier.charAt(0).toUpperCase() + cityTier.slice(1);

        // Get the store size
        let storeSize = parseInt(document.getElementById('range').value, 10);
        // Get the monthly sales
        let monthlySales = parseInt(document.getElementById('range2').value, 10);

        // Run the classification logic
        let salesAnalysis = classifySales(cityTier, areaType, monthlySales, storeSize);

        // Update the sales potential message
        $('#salesPotentialMessage').text(salesAnalysis);
    }

    // Event listeners for the range sliders
    $('#storeSizeInput, #monthlySalesInput').on('input', function () {
        calculateSalesPotential();
    });

    // Event listeners for the radio buttons
    $('input[type="radio"][name="cityTier"]').on('change', function () {
        calculateSalesPotential();
    });

    $('.radio-option').on('click', function () {
        // Remove 'selected' class from all options and add to the clicked one
        $('.radio-option').removeClass('selected');
        $(this).addClass('selected');
        calculateSalesPotential();
    });


    // Set event listeners for when the inputs change
    $('#range, #range2, .radio-option, input[name="cityTier"]').on('change input click', function () {
        calculateSalesPotential();
    });

    // Initial calculation on page load
    calculateSalesPotential();
    
});


