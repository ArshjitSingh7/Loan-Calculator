document.querySelector('.btn').addEventListener('click',function () {
    document.querySelector('.results').style.display='none';
    document.querySelector('.loader').style.display='flex';
    setTimeout(calculate,2000);
});

function calculate (e) {
    const amount = document.getElementById('loan-amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
  
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);
    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
        document.querySelector('.results').style.display='block';
        document.querySelector('.loader').style.display='none';
      } else {
        alert('Please check your numbers');
        document.querySelector('.results').style.display='none';
        document.querySelector('.loader').style.display='none';
      }
    
      e.preventDefault();
}
