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


module.exports = Bank;
