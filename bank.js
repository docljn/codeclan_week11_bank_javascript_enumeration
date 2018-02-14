var Bank = function() {
  this.accounts = [];
};

Bank.prototype.addAccount = function (account) {
  this.accounts.push(account);
};

Bank.prototype.accountByName = function (accountHolderName) {
  const accountsSelected = this.accounts.filter( function (account) {
    return account.name === accountHolderName;
  });
  return accountsSelected;
};

Bank.prototype.payInterest = function (){
  const accountsAfterInterestPaid = this.accounts.map(function(account){
    account.value *= 1.1;
    return account;
  });
  return accountsAfterInterestPaid;
};

Bank.prototype.businessAccounts = function (){
  const businessAccounts = this.accounts.filter(function (account){
    return account.type === "business";
  });
  return businessAccounts;
};


module.exports = Bank;
