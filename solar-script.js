document.addEventListener('DOMContentLoaded', () => {
    const calcBtn = document.getElementById('calculate-btn');
    const resultsDiv = document.getElementById('calc-results');
    const totalWattsEl = document.getElementById('total-watts');
    const systemSizeEl = document.getElementById('system-size');

    // Rough estimated watts per appliance
    const watts = {
        light: 15,
        fan: 60,
        tv: 80,
        fridge: 150,
        acWater: 120
    };

    calcBtn.addEventListener('click', () => {
        const qtyLight = parseInt(document.getElementById('qty-light').value) || 0;
        const qtyFan = parseInt(document.getElementById('qty-fan').value) || 0;
        const qtyTv = parseInt(document.getElementById('qty-tv').value) || 0;
        const qtyFridge = parseInt(document.getElementById('qty-fridge').value) || 0;
        const qtyAcWater = parseInt(document.getElementById('qty-ac-water').value) || 0;

        const totalWatts = (qtyLight * watts.light) +
                           (qtyFan * watts.fan) +
                           (qtyTv * watts.tv) +
                           (qtyFridge * watts.fridge) +
                           (qtyAcWater * watts.acWater);

        // Simple logic to estimate system size based on total concurrent watts
        // Usually, inverter size should be larger than total watts + margin.
        let systemSizeKw = 0;
        if (totalWatts > 0) {
            // Add 30% margin and convert to kW
            let inverterSize = (totalWatts * 1.3) / 1000;
            
            // Round to standard inverter sizes (e.g., 1kW, 3kW, 5kW)
            if (inverterSize <= 1) systemSizeKw = 1;
            else if (inverterSize <= 3) systemSizeKw = 3;
            else if (inverterSize <= 5) systemSizeKw = 5;
            else systemSizeKw = Math.ceil(inverterSize);
        }

        totalWattsEl.textContent = totalWatts + ' واط';
        systemSizeEl.textContent = systemSizeKw > 0 ? systemSizeKw + ' كيلو واط' : '0 كيلو واط';
        
        resultsDiv.style.display = 'block';
    });

    // Handle Form Submission
    const contactForm = document.getElementById('solar-contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const type = document.getElementById('system-type').value;
        
        alert(`شكراً لك ${name}!\nتم استلام طلبك المبدئي بنجاح وسنتواصل معك قريباً على الرقم ${phone}.`);
        contactForm.reset();
    });
});