const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };

const tranferUser = document.querySelector('tranfer_user_input')
const tranferAmmount = document.querySelector('tranfer_ammount_input')
const requestLoan = document.querySelector('request_loan_input')
const closeAccUserName = document.querySelector('#close_acc_user_input')
const closeAccPin = document.querySelector('#close_acc_pin')
const movementContainer = document.querySelector('.movements')

const displayMovements = function(movements){
    
movements.forEach(function(mov , i){

    const type = mov > 0 ? 'Deposite':'Withdrawal' ;
const html = `<div class="movements_row">
    <div class="movements_row_right">
        <p class="movements_row_${type}">${i}${type}</p>
        <p class="movements_row_date"></p>
    </div>
    <div class="movements_row_left">${mov}</div>
</div>`


movementContainer.insertAdjacentHTML('afterbegin' , html)

    
})
}

displayMovements(account1.movements)  