class bank {
    constructor(accName, accNo, Branch, bal) {
        this.AccountHolderName = accName
        this.accNo = accNo
        this.Branch = Branch
        this.balance = bal
        this.transaction = []
    }

    deposit(amount) {
        this.balance = this.balance + amount
        this.transaction.push(amount)
        return this.balance

    }

    withdrawl(amount) {
        if (this.balance >= amount) {
            this.balance = this.balance - amount
            this.transaction.push(-amount)
            return this.balance
        }
        else {
            console.log("Insufficient balance in your account, you can't withdrawl More");
        }
    }

    lastFiveTrans() {
        return this.transaction.slice(-6)
    } 

    TotalDiposit() {
        return this.transaction.filter((el) => {
            return el > 0 
        })
            .reduce((accu, el) => {
                return accu + el
            }, 0)
    }

    TotalWithdrawl() {
        return this.transaction.filter((el) => {
            return el < 0 
        })
            .reduce((accu, el) => {
                return accu + el
            }, 0)
    }
}



let limay = new bank("limay Chaudhari", 2454541, "khiroda pr yawal", 1000)
console.log(limay);

limay.deposit(1500)  
limay.withdrawl(350)
limay.deposit(1400)
limay.withdrawl(400)
limay.deposit(800)
limay.withdrawl(1000)
limay.deposit(750)


//limay.withdrawl(10000) //Insufficient balance in your account, you can't withdrawl More
//console.log(limay);

console.log(limay.transaction);

let newTrans = limay.lastFiveTrans()
console.log(newTrans);

console.log(limay.TotalDiposit());
console.log(limay.TotalWithdrawl());